const outputWords = document.getElementById('outputWords');
const outputLetters = document.getElementById('outputLetters');
const outputScore = document.getElementById('outputScore');
const wordsFormed = document.getElementById('wordsFormed');
const wordsExtra = document.getElementById('wordsExtra');
const turn = document.getElementById('turn');
const table = document.getElementById('table')
const values = [
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
let activeElement;
let words = [];
let letters = [];
let playerCount = 2;

function addElem(element, arrayUsed, output) {
    let n = element.value;
    if (hasIncorrect(n) == false) {
        arrayUsed.push(n);
        element.value = '';
        output.innerHTML = arrayUsed;
    } else {
        output.innerHTML = 'Ingrese solo letras';
        setTimeout(function () {
            output.innerHTML = arrayUsed;
        }, 1000);
        element.value = '';
    }
}

function calculate() {
    let sum = getSum(words);
    let diff = getSum(letters);
    let total = sum - diff;
    outputScore.innerHTML = 'Puntaje total: ' + total;
    words = [];
    letters = [];
    outputWords.innerHTML = words;
    outputLetters.innerHTML = letters;
    playerTurn(total);
}

function getSum(element) {
    let sum = 0;
    for (let wrd = 0; wrd < element.length; wrd++) {
        let arr = element[wrd].split('');
        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < values.length; i++) {
                if (arr[j].toUpperCase() == values[i][0]) {
                    let val = values[i][1];
                    sum += val;
                }
            }
        }
    }
    return sum;
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

function active(str) {
    activeElement = str;
}

let o = 1;

function playerTurn(total) {
    current = Number(document.getElementById('playerScore' + o).innerHTML);
    let update = current+total;
    if (update>Number(document.getElementById('topOutput').innerHTML)){
        console.log('done');
    }
    document.getElementById('playerScore' + o).innerHTML = update;
    o++;
    if (o > playerCount) {
        o = 1;
    }
    turn.innerHTML = o;
}

function addPlayer(difference) {
    if (difference === 1) {
        playerCount++;
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = playerCount;
        cell2.setAttribute('id', 'playerScore' + playerCount);
    } else {
        playerCount--;
        let elem = document.getElementById('playerScore' + playerCount);
        let parent = elem.parentElement;
        let grand = parent.parentElement;
        grand.removeChild(grand.lastChild);
    }
}

function chooseMax() {
    let value = document.getElementById('topScore');
    document.getElementById('topOutput').innerHTML = Math.floor(value.value / 10) * 10;
    value.value = null;
    var div=document.getElementById('scoreTable');
    for (let i = 0; i < 5; i++) {
        div.removeChild(div.firstChild);
    }

}

document.addEventListener('keydown', function () {
    if (event.keyCode === 13 && activeElement == 'wordsFormed') {
        addElem(wordsFormed, words, outputWords);
    } else if (event.keyCode === 13 && activeElement == 'wordsExtra') {
        addElem(wordsExtra, letters, outputLetters);
    } else if (event.keyCode === 36 && activeElement == 'wordsFormed') {
        words.pop();
        outputWords.innerHTML = words;
    } else if (event.keyCode === 36 && activeElement == 'wordsExtra') {
        letters.pop();
        outputLetters.innerHTML = letters;
    } else if (event.keyCode === 33) {
        calculate();
    }
});