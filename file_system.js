const fs = require('fs')

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem\naccusantium doloremque laudantium, totam rem aper"



// const filePath = "./data/text.txt"
// fs.writeFile(filePath, content, "utf-8", (err) => {
//     if (err) {
//         console.error("Fel vid skapande av fil:", err);
//         return
//     }
//     // If here file was created
//     console.log("File created", filePath);
// })

function createHaikuFile(filePath) {
    const lines = []

    rl.question("5 sylables: ", (line1) => {
        lines.push(line1)
        
        rl.question("7 sylables: ", (line2) => {
            lines.push(line2);
            
            rl.question("5 sylables: ", (line3) => {
                lines.push(line3);
                
                const haiku = lines.join("\n");

                fs.writeFile(filePath, haiku, "utf-8", (err) => {
                  if (err) {
                    console.error("Fel vid skapande av fil:", err);
                    return;
                  }
                  console.log("Haiku created");
                  console.log(haiku);
                });
                rl.close()
            });
        });
    })

    
}
// Great warm up mountain
// An old, excited bird roars
// before the vampire

// createHaikuFile("./data/haiku.txt")

// updatedContent = content.replace(url, updatedUrl)

function updateLinkInFile(filePath, oldLink, newLink) {
    rl.close()
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.error("Fel vid inläsning av fil:", err);
          return;
        }
        const replacedText = data.replace(oldLink, newLink)
        if (data === replacedText) {
            return console.log("Text to replace was not found")
        }

        fs.writeFile(filePath, replacedText, "utf-8", (err) => {
            if (err) {
                console.error("Fel vid uppdatering av fil:", err);
                return;
            }
            console.log("Filen har updatertas")
        })
    })
}

// updateLinkInFile("./data/text.txt", "https://google.new", "https://google.nu")

function removeFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Fel vid borttagning av fil:", err);
            return;
        }
        console.log("Filen har tagits bort")
    })
}

removeFile("./data/29_feb.txt")