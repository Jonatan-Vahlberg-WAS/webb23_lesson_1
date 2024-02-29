// console.log(process.argv);

const { argv } = require("process")

process.argv.forEach(argument => {
    // console.log(argument)
})

if (process.argv.includes("--watch")) {
    console.log("Starting in watch mode")
}

// Argument construction --watch or --mode dev

const modeIndex = argv.findIndex(arg => arg === "--mode")
const dbIndex = argv.findIndex(arg => arg === "--db")

if (modeIndex !== -1) {
    const mode = argv[modeIndex + 1]?.toUpperCase()
    console.log("Mode is", mode)

    if (mode === "TESTING") {
        console.log("Running tests")
    }

    const db = argv[dbIndex + 1]
    
    if (db) {
        console.log("Attaching to DB: ", db)
    }
    
}