const headerTitle = document.querySelector('.header__title');

const greetings = [
    'Вітаю!',
    'Привіт!',
    'Hello!',
    'Добрий день!',
    'Hey!',
    'Buenos dias!'
]

const colors = [
    'red',
    'yellow',
    'blue'
]

function getRandomEl(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

headerTitle.innerText = getRandomEl(greetings);
headerTitle.style.color = getRandomEl(colors);
