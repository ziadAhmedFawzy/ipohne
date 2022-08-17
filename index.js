let img = document.getElementById("img");

let btn1 = document.getElementById("one")
let btn2 = document.getElementById("two")
let btn3 = document.getElementById("three")
let btn4 = document.getElementById("four")
let btn5 = document.getElementById("five")

btn1.onclick = function() {
    document.body.style.background = "#000"
    img.src = "elements/0.png"
}

btn2.onclick = function() {
    document.body.style.background = "#3e86c6"
    img.src = "elements/1.png"
}

btn3.onclick = function() {
    document.body.style.background = "#222"
    img.src = "elements/2.png"
}

btn4.onclick = function() {
    document.body.style.background = "#bab16e"
    img.src = "elements/3.png"
}

btn5.onclick = function() {
    document.body.style.background = "#890000"
    img.src = "elements/4.png"
}