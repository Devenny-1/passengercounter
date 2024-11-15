//document.getElementById("count-el").innerText = 5

//let count = 5;
//count = count + 1;
//console.log(count)

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

var count = 0;

function increment() {
    count += 1
    countEl.textContent = count 
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    count = 0
    countEl.textContent = count 
} 

function decrease() {

    if (count > 0) {
        count -= 1
        countEl.textContent = count
}

}

let welcomeEl = document.getElementById('welcome-el') 

let name = 'Patience'
let greeting = 'Welcome Back'

welcomeEl.innerText = greeting + ', ' + name + '!'

