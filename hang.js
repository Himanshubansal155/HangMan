console.log('Hang Man Game');

let questionDisplay = document.getElementById('question');
let letterDisplay = document.getElementById('letter');
let playAgain = document.getElementById('playAgain');
let hint = document.getElementById('hint');
let clueH = document.getElementById('clueH');
let clue = document.getElementById('clue');
let result = document.getElementById('result');
let time = document.getElementById('time');
let timer = document.getElementById('timer');
var answer, number;
var string1 = "";
let newstr = "";
let remainingTime = 10;

let question = [["Communication Protocol", "The protocol that signifies a ''secure'' mode of communication.", "https"], ["URL type", "A uniform resource locator is part of it.", "uri"]];

playAgain.addEventListener('click', () => {
    location.reload();
});

hint.addEventListener('click', () => {
    clueH.style.display = 'initial';
    clue.innerHTML = question[number][1];
})

function displayQuestion() {
    number = Math.floor(Math.random() * question.length);
    let question1 = question[number][0];
    answer = question[number][2];
    questionDisplay.innerHTML = question1;
    timer.innerHTML = "Total Chances: " + remainingTime;
    addLining();
}

displayQuestion();

function addAlphabet(e) {
    let count = 1;
    for (let index = 0; index < answer.length; index++) {
        let word1 = answer.charAt(index);
        if (word1 == e.id) {
            let orstr = string1.substr(0, index);
            let rpstr = string1.substr(index + 1);
            newstr = orstr + e.id + rpstr;
            string1 = newstr;
            count = index;
            letterDisplay.innerHTML = newstr;
        }
    }
    let word = answer.charAt(count);
    if (word != e.id) {
        remainingTime -= 1;
        timer.innerHTML = "Total Chances: " + remainingTime;
        checkAnswer();
    }
    document.getElementById(`${e.id}`).disabled = true;
    document.getElementById(`${e.id}`).style.cursor = 'no-drop';
    document.getElementById(`${e.id}`).style.backgroundColor = '#e4e0e0';
    checkAnswer();
}

function addLining() {
    let html = "";
    for (let index = 0; index < answer.length; index++) {
        html += "_";
        string1 += "_";
    }
    letterDisplay.innerHTML = html;
}

function checkAnswer() {
    if (answer == newstr) {
        result.innerHTML = "Hurrah! You Won The Game";
        hint.disabled = true;
        hint.style.cursor = 'no-drop';
        hint.style.backgroundColor = 'rgb(142, 161, 35)';
        hint.style.color = 'rgb(255, 255, 255)';
        time.style.display = 'none';
    }

    if (remainingTime == 0) {
        result.innerHTML = "Better Luck Next Time";
        hint.disabled = true;
        hint.style.cursor = 'no-drop';
        hint.style.backgroundColor = 'rgb(142, 161, 35)';
        hint.style.color = 'rgb(255, 255, 255)';
        time.style.display = 'none';
        letterDisplay.style.display = 'none';
        newstr = "";
    }
}