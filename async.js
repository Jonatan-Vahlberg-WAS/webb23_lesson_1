const fs = require("fs");
const fs_promise = require("fs").promises

const filePath = './data/lorem_ipsum.txt'
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file: ", filePath, err)
        return;
    }
})

function fileStatsCallback(filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error("Error reading file: ", filePath, err);
          return;
        }
        const content = data.toString().trim();
        console.log(`Textens längd: ${content.length} tecken`);
        console.log(`Antal ord: ${content.split(" ").length} ord`);
        console.log(`Antal rader: ${content.split("\n").length} rader`);
    })
}

// fileStatsCallback(filePath)

function readCSVRowsPromise(filePath) {
    fs_promise.readFile(filePath, "utf-8")
      .then((data) => {
          console.log("Content: ", data);
          const rows = data.trim().split("\n")
          const users = rows.slice(1).map(row => {
              const rowData = row.split(";")
              console.log(rowData)
              const user = {
                userName: rowData[0],
                id: rowData[1],
                firstName: rowData[2],
                lastName: rowData[3],
              };
              return user
          })
          console.log("Users: \n", users)
      })
      .catch((err) => {
        console.error("Fel vid läsning av filen:", err);
      });
}

// readCSVRowsPromise("./data/username.csv")



async function findWordOccurenceAsyncAwait(filePath, word = "") {
    if(!word) return console.log("No word submitted")
    word = word.toLowerCase()
    try {
        const data = await fs_promise.readFile(filePath, 'utf-8');
        const rows = data.trim().toLowerCase().split("\n")
        const words = rows.map(row => row.split(" ")).flat(1)
        const trimmedWords = words.map(w => (
            w.replace(".", "")
                .replace("?", "")
                .replace("!", "")
                .replace("\n","")
        ))
        const occurences = trimmedWords.filter((w) => w === word).length;
        console.log(`${word} appears ${occurences} times`)
    }
    catch (err) {
        console.error("Fel vid läsning av filen:", err);
    }
}

findWordOccurenceAsyncAwait("./data/green_eggs_and_ham.txt", "");
