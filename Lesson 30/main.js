// let str = "Привет";
// let str2 = 'Одинарные кавычки тоже подойдут';
// let phrase = Обратные кавычки позволяют встраивать переменные ${str};

// let name = "Иван";

// // Вставим переменную
// alert( Привет, ${name}! ); // Привет, Иван!

// // Вставим выражение
// alert( результат: ${1 + 2} ); // результат: 3


// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// let body = document.querySelector('body')
// body.insertAdjacentHTML('afterbegin',`
//     <h1>Learning JavaScript</h1>
//     <h1>Learning JavaScript</h1>
//     <button onclick='changeColor()'>Change color</button>
// `)
// let mainHeading = document.querySelector('h1')
// let changeBTN = document.querySelector('button')

// mainHeading.style.color = 'blue'

// function changeColor () {
//     let red = Math.round(Math.random()*255)
//     let green = Math.round(Math.random()*255)
//     let blue = Math.round(Math.random()*255)
//     alert(red)
//     mainHeading.style.color = `rgb(${red},${green},${blue})`
//     mainHeading.style.fontSize = '50px'
//     changeBTN.innerHTML = mainHeading.style.color
// }

function begin1 () {  
    let a = Number(prompt('input'))
    alert(`Parametr=${4*a}`)
}
function begin2 () {
    let a = Number(prompt('input'))
    alert(`Area=${a**2}`)
}
function begin5 () {
    let a = Number(prompt('input'))
    alert(`Объем=${a**3}`)
    alert(`Площадь=${6*a**2}`)
}
function begin6 () {
    let a = Number(prompt('input'))
    let b = Number(prompt('input'))
    let c = Number(prompt('input'))
    alert(`V=${a*b*c}`)
    alert(`S=${2*(a*b+b*c+a*c)}`)
}
function begin8 () {
    let a = Number(prompt('input'))
    let b = Number(prompt('input'))
    alert(`ср знач=${(a+b)/2}`)
    
}
function begin9 () {
    let a = Number(prompt('input'))
    let b = Number(prompt('input'))
    alert(`корень=${(a+b)**0.5}`)
    
}
function begin12 () {
    let a = Number(prompt('input'))
    let b = Number(prompt('input'))
    alert(`с=${(a**2+b**2)**0.5}`)
    let с = (a**2+b**2)**0.5
    alert(`P=${a+b+c}`)
    
}
function begin4 () {  
    let d = Number(prompt('input'))
    alert(`L=${3.14*d}`)
}
function begin7 () {  
    let R = Number(prompt('input'))
    alert(`L=${2*3.14*R}`)
    alert(`S=${3.14*R**2}`)
}
function begin10 () {  
    let a = Number(prompt('input'))
    let b = Number(prompt('input'))
    alert(`сумма=${a**2+b**2}`)
    alert(`разность=${a**2-b**2}`)
    alert(`произведение=${a**2*b**2}`)
    alert(`частное=${a**2/b**2}`)
}
function begin15 () {  
    let S = Number(prompt('input'))
    let D = (4*S/3.14)**0.5
    let L = 3.14*D
    alert(`S=${(3.14*D**2)/4}`)
    alert(`D=${1/3.14}`)
    alert(`L=${3.14*D}`)
}
function begin16 () {  
    let x1 = Number(prompt('input'))
    let x2 = Number(prompt('input'))
    alert(`расстояние=${x1-x2}`)
}
function begin32 () {  
    let tc = Number(prompt('input'))
    alert(`tc=${(-39)*5/9}`)
}
function integer1(){
    let a = Number(prompt('input number'))
    var l = (a/100) 
    alert(round(l))
}
function integer2() {
    let a = Number(prompt('input number'));
    var m = a/1000;
    alert(m)
}
function integer3(){
    let a = Number(prompt('input number'))
    var m = a/1024;
    alert(m)
}