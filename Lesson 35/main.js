function series01() {
    let mas = []
    for (let i = 0; i < 10;i++) {
        // let c = +prompt(Input ${i} element)
        let c =  Math.round(Math.random()*10)
        mas.push(c)
        // mas[i] = c

    }

    let sum = 0
    for (let i = 0; i < mas.length; i++) {
        sum += mas[i]
    }

    let sum2 = 0
    for (const iterator of mas) {
        sum2 += iterator
    }

    console.log(`Sum = ${sum}`)
    console.log(`Sum2 = ${sum2}`)
    console.log(mas)
}

function series02() {
    let mas = []
    for (let i = 0; i < 10;i++) {
        // let c = +prompt(Input ${i} element)
        let c =  Math.round(Math.random()*10)
        mas.push(c)
        // mas[i] = c

    }

    let sum = 0
    for (let i = 0; i < mas.length; i++) {
        sum += mas*mas[i]
    }

    let sum2 = 0
    for (const iterator of mas) {
        sum2 += iterator
    }

    console.log(`Sum = ${sum}`)
    console.log(`Sum2 = ${sum2}`)
    console.log(mas)
}

function series03() {
    let mas = []
    for (let i = 0; i < 10;i++) {
        // let c = +prompt(Input ${i} element)
        let c =  Math.round(Math.random()*10)
        mas.push(c)
        // mas[i] = c

    }

    let avr = 0
    for (let i = 0; i < mas.length; i++) {
        avr += mas[i]/mas.length
    }

    let avr2 = 0
    for (const iterator of mas) {
        avr2 += iterator/mas.length
    }

    console.log(`Average = ${avr}`)
    console.log(`Average2 = ${avr2}`)
    console.log(mas)
}

function series06() {
    let mas = []
    for (let i=0; i < 10; i++) {
        mas[i] = Math.random*(10)
    }    
    let mas2 = []
    for (let i=0; i < mas.length; i++) {
        mas2[i] = mas[i]%1
    }
    console.log(mas2)
}    