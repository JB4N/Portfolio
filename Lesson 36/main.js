// let setName = function () {
//     let name = prompt('Input your name')
//     localStorage.setItem('my name',name)
// }
// let setAge = function () {
//     let age = prompt('Input your age')
//     localStorage.setItem('my age',age)
// }

// let getName = () => {
//     let name = localStorage.getItem('my name')
//     alert(name)
// }
// let getAge = () => {
//     let age = localStorage.getItem('my age')
//     alert(age)
// }

// function getStorageKey() {
//     for(let i=0; i<localStorage.length; i++) {
//         let key = localStorage.key(i);
//         alert(`${key}: ${localStorage.getItem(key)}`);
//     }
// }

function SignX(X) {

    if (X<0) {
        return -1
    }
    else if (X>0) {
        return 1
    }
    else {
        return 0
    }
}
function Proc16() {
    let X = +prompt()
    alert(SignX(X))
}

function RootCount(A,B,C) {
    let D = B**2-4*A*C

    if (D>0) {
        return 2
    }
    else if (D=0) {
        return 1
    }
    else {
        return 0
    }
}

function Proc17() {
    let A = +prompt('A')
    let B = +prompt('B')
    let C = +prompt('C')
    alert(RootCount(A,B,C))
}

function CicleS(R) {
    let S = 3.14*R
}

function Proc18() {
    
}