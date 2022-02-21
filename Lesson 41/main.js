let btnCreate = document.querySelector('.btn--create')
let btnClear = document.querySelector('.btn--clear')

let container = document.querySelector('.container')
let inputWidth = document.getElementById('width')
let inputHeight = document.getElementById('height')
let inputRound = document.getElementById('round')
let inputColor = document.getElementById('color')

let newBlock

let coordTop
let coordLeft

btnCreate.addEventListener('click', () => {
    let iWidth = inputWidth.value
    let iHeight = inputHeight.value
    let iRound = inputRound.value
    let iColor = inputColor.value
    coordTop = 0
    coordLeft = 0

    newBlock = document.createElement('div')
    newBlock.style.width = iWidth + 'px'
    newBlock.style.height = iHeight + 'px'
    newBlock.style.borderRadius = iRound + 'px'
    newBlock.style.backgroundColor = iColor
    newBlock.style.border = '2px solid green'
    newBlock.style.position = 'relative'
    container.prepend(newBlock)
})

btnClear.addEventListener('click', clearBlock)

function clearBlock () {
    newBlock.remove()
}

let btnTop = document.querySelector('.btn--top')
let btnDown = document.querySelector('.btn--down')
let btnLeft = document.querySelector('.btn--left')
let btnRight = document.querySelector('.btn--right')

btnTop.addEventListener('click', moveTop)

function moveTop () {
    coordTop -= 50
    newBlock.style.top = coordTop + 'px'

}

btnDown.addEventListener('click', moveDown)

function moveDown () {
    coordTop += 50
    newBlock.style.top = coordTop + 'px'

}

btnLeft.addEventListener('click', moveLeft)

function moveLeft () {
    coordLeft -= 50
    newBlock.style.left = coordLeft + 'px'

}

btnRight.addEventListener('click', moveRight)

function moveRight () {
    coordLeft += 50
    newBlock.style.left = coordLeft + 'px'
}