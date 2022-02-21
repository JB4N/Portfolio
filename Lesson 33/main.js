// function Sign(X) {
//     if (X < 0) {
//         return -1
//     } else if (X == 0) {
//         return 0
//     } else {
//         return 1
//     }
// }

// let A = +prompt('Input A:')
// let B = +prompt('Input B:')
// console.log(Sign(A)+Sign(B))

// function RootCount(A,B,C) {
//     let D = B**2+4*A*C
//     if(D==0) {
//         return 1
//     }
//     else if (D > 0) {
//         return 2
//     }
//     else if (D < 0) {
//         return 0
//     }
// }

// let A = +prompt('Input A:')
// let B = +prompt('Input B:')
// let C = +prompt('Input C:')
// console.log(RootCount(A,B,C))

// function TriangleP(a,h) {
//     let b = ((a/2)**2+h**2)**0.5
//     let P = a+b+c

// }
// let a = +prompt('Input a:')
// let h= +prompt('Input h:')

function for1 () {
    let N = +prompt('N=')
    let K = +prompt('K=')

    for (let i = 0; i < N; i++) {
        alert(i+' '+K)
    }
}    

function for2 () {
    let A = +prompt('от')
    let B = +prompt('до')

    if(A > B) {
        alert('Ошибка')
    } else {
        for (let i = A; i <= B; i++) {
            alert('Целые числа'+''+i)
        }
        alert('Кол-во целых чисел'+(B-A+1))
    }
}

function for3 () {
    let A = +prompt('от')
    let B = +prompt('до')

    if(A > B) {
        alert('Ошибка')
    } else {
        for (let i = B-1; i > A; i--) {
            alert('Целые числа'+''+i)
        }
        alert('Кол-во целых чисел'+(B-A-1))
    }
}

function for4 () {
    let A = +prompt('Цена за 1 кг')

    for (let i = 1; i <= 10; i++){
        alert('Цена за'+(i)+'кг'+'='+(i*A))
    }

}

function for5 () {
    let A = +prompt('Цена за 1 кг')

    for (let i = 1; i <= 10; i++){
        alert('Цена за'+(i/10)+'кг'+'='+((i*A)/10))
    }

}

// function for6 () {
//     let A = +prompt('Цена за 1 кг')

//     for (let i = 1; i <= 10; i++){
//         alert('Цена за'+(i/5)+'кг'+'='+((i*A)/5))
//     }

// }

function for8 () {
    let A = +prompt('от')
    let B = +prompt('до')

    if(A > B) {
        alert('Ошибка')
    } else {
        for (let i = A; i <= B; i*i) {
            alert('Целые числа'+''+i)
        }
        alert('Кол-во целых чисел'+(B-A+1))
    }
}

