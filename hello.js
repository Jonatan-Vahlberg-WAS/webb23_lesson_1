console.log("Hello world!");


let fullName = "Jonatan Vahlberg";
fullName = "Jonatan V";

console.log(fullName)

// Const - Can not be redeclared
const id = "8s83hhjs";

// Const arrays - can only be changed in terms of content of array
const pets = []
pets.push("Dog")

// Const objects - can only change its attributes
const user1 = {
    fullName,
    id,
    pets,
    favoriteColor: undefined,
    isStudent: false,
    age: 27
}

user1.favoriteColor = "maroon";

console.log(user1)

if (user1.age === 27) console.log("Age is", user1.age)
if (user1.age === "27") console.log("Age is", user1.age, "string comparisson");


for (let i = 0; i <= user1.pets.length - 1; i++) {
    console.log(user1.pets[i])
}

user1.pets.forEach(pet => {
    console.log(pet)
})

// Higher order functions arrayer - forEach, map, reduce, join


// Readline

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Enter your name: ", (name) => {
//     console.log(`Hej ${name}`)
//     rl.question("What is your age: ", (age) => {
//         console.log("Age: ", age)
//     })
//     rl.close();
// })

//Uppgift Snabbkassa
// Användaren ska kunna ta in produkter i en array som skrivs ut när en produkt har lagts till ie ["Apple","Orange"] gör detta genom readline

const items = []
function addToItems() {
    if (items.length >= 3) {
        rl.close()
        return console.log("max items")
    }

    rl.question("Add product: ", (productName) => {
        if (productName === "") {
            rl.close()
            return console.log("Purchase ended")
        }
        const productIndex = items.findIndex((item) => item.name === productName)
        if (productIndex !== -1) {
            items[productIndex].quantity += 1 
        }
        else {
            items.push({
                name: productName,
                quantity: 1
            })
        }

        console.log("Items: ", items)
        return addToItems()
    })
}

addToItems()

// Uppgift 2 Låt användaren avbryta köpet om den skickar "" som inmatning

// Uppgift extra 1 byt ut sträng mot  produkt object  som innehåller namn och hur många och om en annvändare "scannar/rl" in samma produkt öka antalet.





