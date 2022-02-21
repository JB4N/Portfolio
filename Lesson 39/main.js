async function getHero () {
    let number = document.getElementById('num').value
    let url = `https://swapi.dev/api/people/${number}/`
    let response = await fetch(url);
    let hero

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        hero = await response.json();
        console.log(hero)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    let heroesBlock = document.querySelector('.heroes')
    heroesBlock.insertAdjacentHTML('beforeend', `
        <div class="hero" draggable = "true">
            <li class="tasks__item">
                <div class="name">Name: ${hero.name}</div>
                <div class="height">Height: ${hero.height}</div>
            </li>
        </div>    
    `)
}

async function getPlanet () {
    let number = document.getElementById('num').value
    let url = `https://swapi.dev/api/planets/${number}/`
    let response = await fetch(url);
    let planets

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        planets = await response.json();
        console.log(planets)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    let planetsBlock = document.querySelector('.planets')
    planetsBlock.insertAdjacentHTML('beforeend', `
        <div class="planets" draggable = "true">
            <li class="tasks__item">
                <div class="name">Name: ${planets.name}</div>
                <div class="diameter">Diameter: ${planets.diameter}</div>
            </li>
        </div>    
    `)
}




const tasksListElement = document.querySelector(`.tasks__list`);
const tasksElements = tasksListElement.querySelectorAll(`.tasks__item`);



tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
})
  
tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
});

tasksListElement.addEventListener(`dragover`, (evt) => {

evt.preventDefault();

const activeElement = tasksListElement.querySelector(`.selected`);

const currentElement = evt.target;

const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`tasks__item`);
  
if (!isMoveable) {
    return;
}
  
const nextElement = (currentElement === activeElement.nextElementSibling) ?
    currentElement.nextElementSibling :
    currentElement;
  
tasksListElement.insertBefore(activeElement, nextElement);
});







// async function getStarship () {
//     let number = document.getElementById('num').value
//     let url = `https://swapi.dev/api/starships/${number}/`
//     let response = await fetch(url);
//     let starships

//     if (response.ok) { // если HTTP-статус в диапазоне 200-299
//     // получаем тело ответа (см. про этот метод ниже)
//         planets = await response.json();
//         console.log(starships)
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }

//     let starshipsBlock = document.querySelector('.starships')
//     starshipsBlock.insertAdjacentHTML('beforeend', `
//         <div class="starships">
//             <div class="name">${starships.name}</div>
//             <div class="model">${starships.model}</div>
//         </div>    
//     `)
// }