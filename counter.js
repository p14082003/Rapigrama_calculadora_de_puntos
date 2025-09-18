const outputWords = document.getElementById('outputWords');
const outputLetters = document.getElementById('outputLetters');
const outputScore = document.getElementById('outputScore');
const wordsFormed = document.getElementById('wordsFormed');
const wordsExtra = document.getElementById('wordsExtra');
let words = [];
let letters = [];
let values = [
    ['A', 1],
    ['B', 4],
    ['C', 4],
    ['D', 3],
    ['E', 1],
    ['F', 4],
    ['G', 4],
    ['H', 3],
    ['I', 2],
    ['J', 6],
    ['K', 5],
    ['L', 2],
    ['M', 3],
    ['N', 2],
    ['Ñ', 4],
    ['O', 1],
    ['P', 4],
    ['Q', 8],
    ['R', 2],
    ['S', 2],
    ['T', 2],
    ['U', 3],
    ['V', 4],
    ['W', 8],
    ['X', 8],
    ['Y', 4],
    ['Z', 10],
];

function addWord() {
    let word = wordsFormed.value;
    if (hasIncorrect(word) == false) {
        words.push(word);
        wordsFormed.value = '';
        outputWords.innerHTML = words;
    } else {
        outputWords.innerHTML = 'Ingrese solo letras';
        setTimeout(function () {
            outputWords.innerHTML = words;
        }, 1000);
        wordsFormed.value = '';
    }
}

function addExtraLetter() {
    let extra = wordsExtra.value;
    if (hasIncorrect(extra) == false) {
        letters.push(extra);
        wordsExtra.value = '';
        outputLetters.innerHTML = letters;
    } else {
        outputLetters.innerHTML = 'Ingrese solo letras sobrantes';
        setTimeout(function () {
            outputLetters.innerHTML = words;
        }, 1000);
        wordsExtra.value = '';
    }
}

function calculate() {
    let sum = getWordSum();
    let diff = getWordDiff();
    outputScore.innerHTML = 'Puntaje total: ' + (sum - diff);
}

function getWordSum() {
    let sum = 0;
    for (let wrd = 0; wrd < words.length; wrd++) {
        let arr = words[wrd].split('');
        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < values.length; i++) {
                if (arr[j].toUpperCase() == values[i][0]) {
                    var val = values[i][1];
                    sum += val;
                }
            }
        }
    }
    return sum;
}

function getWordDiff() {
    let diff = 0;
    for (let wrd = 0; wrd < letters.length; wrd++) {
        let arr = letters[wrd].split('');
        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < values.length; i++) {
                if (arr[j].toUpperCase() == values[i][0]) {
                    var val = values[i][1];
                    diff += val;
                }
            }
        }
    }
    return diff;
}

function hasIncorrect(t) {
    if (/ñ/g.test(t)) {
        return false;
    } else if (/\d/.test(t) || /\s/.test(t) || /\W/.test(t) || /_/g.test(t)) {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('keydown', function () {
    if (event.keyCode === 13) {
        addWord();
    } else if (event.keyCode === 35) {
        addExtraLetter();
    } else if (event.keyCode === 36) {
        words.pop();
        outputWords.innerHTML = words;
    } else if (event.keyCode === 33){
        calculate();
    }
});