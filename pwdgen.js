let characters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z",
    "!", "@", "#", "$", "%", "^", "&", "*"
]
let pwd = []
let passwordEl = document.querySelector("#password")

function generate() {
    passwordEl.value = ""
    for (let i=0; i<13; i++) {
        let randomNum = Math.floor(Math.random()*characters.length)
        let randomChar = characters[randomNum]
        passwordEl.value += randomChar
    }
}

