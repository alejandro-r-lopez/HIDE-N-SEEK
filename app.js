// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

let incorrectGuesses = 0;
let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('shed', correctSpot);

    // get a random item to call the 'correct spot'
    // call the handleGuess function with the correct parameters (the user's guess and the 'correct' hiding place) to do DOM work
});

treeButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('tree', correctSpot);

    // get a random item to call the 'correct spot'
    // call the handleGuess function with the correct parameters (the user's guess and the 'correct' hiding place) to do DOM work
});

boulderButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('boulder', correctSpot);

    // get a random item to call the 'correct spot'
    // call the handleGuess function with the correct parameters (the user's guess and the 'correct' hiding place) to do DOM work
});

function getRandomHidingSpot() {
    const hidingPlaces = ['tree', 'shed', 'boulder'];

    const index = Math.floor(Math.random() * hidingPlaces.length);

    const correctSpot = hidingPlaces[index];

    return correctSpot;

    // initialize state

    // use the random index above and the array of hidingPlaces to get a random hiding place string

    // return that random hiding place string
}

function handleGuess(userGuess, correctSpot) {
    removeClasses();

    const correctAnswer = document.getElementById(`${correctSpot}-container`);

    if (correctSpot === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }

    totalGuesses++;

    winsEl.textContent = correctGuesses;
    lossesEl.textContent = incorrectGuesses;
    totalEl.textContent = totalGuesses;

    correctAnswer.classList.add('face');

    lossCount.textContent = incorrectGuesses;
    winCount.textContent = correctGuesses;

    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face

    // we can do that by removing the .face class from all containers

    // then increment the guesses

    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM

    // then add the .face css class to that element so that the face shows up

    // then if the user guess is correct, increment the correct guesses// update the DOM to show the new value of wins, losses and total guesses to the user
}

function removeClasses() {
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}
