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
            outputLetters.innerHTML = letters;
        }, 1000);
        wordsExtra.value = '';
    }
}

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