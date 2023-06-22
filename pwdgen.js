let characters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z",
    "!", "@", "#", "$", "%", "^", "&", "*"
]
let pwd = []
let passwordEl = document.querySelector("#password")
let generateBtn = document.querySelector("#generate-btn")
let copyBtn = document.querySelector("#copy-btn")
let clearBtn = document.querySelector("#clear-btn")

// generates random password
function generate() {
    passwordEl.value = ""
    for (let i=0; i<13; i++) {
        let randomNum = Math.floor(Math.random()*characters.length)
        let randomChar = characters[randomNum]
        passwordEl.value += randomChar
    }
    generateBtn.textContent = "GENERATED!"
    setTimeout(returnGenerate, 300)
}

// Copies to clipboard
function copy() {
    let copyText = passwordEl
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    copyBtn.textContent = "COPIED!"
    setTimeout(returnCopy, 300)
}

// Clears password field
function clearField() {
    passwordEl.value = ""
    clearBtn.textContent = "CLEARED!"
    setTimeout(returnClear, 300)
}

// returns generate-btn to original
function returnGenerate() {
    generateBtn.textContent = "GENERATE PASSWORD"
}

// returns copy-btn to original
function returnCopy() {
    copyBtn.textContent = "COPY"
}

//returns clear-btn to original
function returnClear() {
    clearBtn.textContent = "CLEAR PASSWORD"
}
