const faveColor = document.querySelector('#color');
const favePlace = document.querySelector('#place');
const faveRitual = document.querySelector('#ritual');

const alertColor = () => {
    alert('My fave color is purple!')
}

const alertPlace = () => {
    alert('My favorite place is the beach!')
}

const alertRitual = () => {
    alert('My favorite ritual is a playing valorant after a long day. PEW PEW!')
}

faveColor.addEventListener('click', alertColor);
favePlace.addEventListener('click', alertPlace);
faveRitual.addEventListener('click', alertRitual);

