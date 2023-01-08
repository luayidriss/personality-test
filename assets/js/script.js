// Questions, Answers and Scores

let prompts = [
    'I see myself as someone who has few artistic qualities.',
    'I see myself as someone who tends to be lazy.',
    'I see myself as someone who is generally trusting.',
    'I see myself as someone who is reserved.',
    'I see myself as someone who is relaxed and handles stress well.',
    'I see myself as someone who has an active imagination.',
    'I see myself as someone who does a thorough job.',
    'I see myself as someone who tends to find fault with others.',
    'I see myself as someone who is outgoing and sociable.',
    'I see myself as someone who gets nervous easily.',
    'I see myself as someone who gets nervous easily.'
]

let answerValues = [
    [5, 4, 3, 2, 1],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [0, 0, 0, 0],
];

const questions = [
    {
        "question": "",
        "optionScore": [5,4,3,2,1 ]
    }
]

let userValues = [];
let userTotals = [];

// Description
let personalityDescriptors = [
    'You are inventive and curious,let people in your life know that you love to be challenged. Make sure you have creative outlets to express yourself. You also have to make sure your spouse or partner knows your level of adventure so your needs are met.',
    'You are efficient and organized. you want to make sure the people around you respect your desire to have a plan.',
    'You are outgoing and energetic. You like to be with people.',
    'You are friendly and compassionate, understanding others comes easy to you.',
    'You are sensitive and tend to be more nervous. You have to know your triggers–what makes you worry? And your calmers–what helps you calm down? So you can be more in control of your moods.',
    'You are consistent and cautious. You can easily be accustomed to habits and you can rely in your area of expertise.',
    'You are more easy-going and laid back. It does not come naturally for you to be organized, you like to go with the flow.',
    'You are more solitary and reserved, be sure not to force yourself to try being extroverted. Honor your introversion.',
    'You are more analytical and detached. Empathy is not a natural instinct to you, that is okay. Know that you must make more mental effort to put yourself in their shoes.',
    'You tend to be more secure and stable in your emotions.',
]


const startButton = document.getElementById("start-btn")
const initialPage = document.getElementById("initial-page")
const nextButton = document.getElementById("next-btn")
const prevButton = document.getElementById("prev-btn")
const finishButton = document.getElementById("finish-btn")
const counterText = document.getElementById("counter")
const testArea = document.getElementById("test-area")
const radioButtons = document.getElementsByClassName('radio')
const resultArea = document.getElementById("result-area")
const restartButton = document.getElementById("reset-btn")
const moveButton = document.getElementsByClassName("move-btn")

// Prompt that is shown to user for result.
const promptElement = document.getElementById("prompts")


// var optionElements = []
// for (let i=1; i<6;i++){
//     optionElements.push(document.getElementById("option" + i));
// }
const optionElements = document.getElementsByClassName("user-option");

const personalityText = document.getElementsByClassName('pdescriptor')
var counter = 0
// const extroText = document.getElementById("extroversion")
// const agreeText = document.getElementById("agreeableness")
// const consText = document.getElementById("conscientiousness")
// const neuroText = document.getElementById("neuroticism")
// const openText = document.getElementById("openness")

//Load Questions

function generateQuestions() {
    promptElement.innerHTML = `${prompts[counter]}`

    for (let j = 0; j < optionElements.length; j++) {
        optionElements[j].setAttribute("data-value", `${answerValues[counter][j]}`)
    }
    for (let k = 0; k < radioButtons.length; k++) {
        radioButtons[k].checked = false;
    }
    counterText.innerHTML = `${counter+1} `

}



function runGame() {
    initialPage.classList.add('hide');
    testArea.classList.remove('hide');
    for (let i = 0; i < moveButton.length; i++) {
        moveButton[i].classList.remove('hide');
    }
    generateQuestions()
}


// Next and Tally Button
nextButton.addEventListener('click', loadNextQuestion);
// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         if (counter < 10) {
//             loadNextQuestion();
//         } else {
//             nextButton.classList.add('hide');
//             finishButton.classList.remove('hide');
//             alert("This is the last question. Press Enter to Submit");
//             counter++
//         }
//     } else {}
// })

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         if (counter > 11) {
//             showResult()
//         }
//     } else {
//         loadNextQuestion();
//     }
// })

function checkQuestionAnswered() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    if (!selectedOption) {
        alert('Please select your answer!');
    }

    return !!selectedOption;
}

function loadNextQuestion() {
    if (!checkQuestionAnswered()) return;
    
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    var answerScore = parseInt(selectedOption.nextElementSibling.dataset.value);
    userValues.push(answerScore);
    counter++;
    if (counter < 10) {
        generateQuestions()
    } 
    
    if (counter == 9) {
        nextButton.classList.add('hide');
        finishButton.classList.remove('hide');
    }
}
// Previous and Remove Score Button
prevButton.addEventListener('click', loadPreviousQuestion);
// document.addEventListener("keydown", function (event) {
//     if (event.target is one of the radio elements) {
//         return;
//     }

//     if (event.key === "Backspace") {
//         loadPreviousQuestion();
//     }
// });

function loadPreviousQuestion() {
    if (counter <= 0) {
        alert('This is the first statement!')
    } else {
        counter--;
        generateQuestions()
        // Currently we do not preserve the state if user moves back and forth. 
        // TODO: Fix and start storing the state so that user sees the option he/she selected previously.
        userValues.pop();
    }
}

/**
 * Describe what this function do.
 * @param {type} name description
 * @returns {type} description
 */
function calculateScore() {
    for (i = 0; i < 5; i++) {
        userTotals.push(userValues[i] + userValues[i + 5])
    }
}
// Finish Button and Show Personality Description
finishButton.addEventListener('click', showResult)

function showResult() {
    if (!checkQuestionAnswered()) return;
    testArea.classList.add('hide')
    prevButton.classList.add('hide')
    finishButton.classList.add('hide')
    calculateScore();
    for (i = 0; i < personalityText.length; i++) {
        if (userTotals[i] >= 5) {
            personalityText[i].innerHTML = personalityDescriptors[i]
        } else {
            personalityText[i].innerHTML = personalityDescriptors[i + 5]
        }
    }
    resultArea.classList.remove('hide')
}

//Restart Button Function
restartButton.addEventListener('click', restartTest)

function restartTest() {
    resultArea.classList.add('hide')
    initialPage.classList.remove('hide')
    counter = 0;
    userValues.length = 0;
    userTotals.length = 0;
}

// Attach event listeners.
startButton.addEventListener('click', runGame);