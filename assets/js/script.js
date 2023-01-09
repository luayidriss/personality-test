// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

// Questions, Scores, User Inputs and Personality Descriptors

const questions = [
    {
        "question": 'I see myself as someone who has few artistic qualities.',
        "optionScore": [5,4,3,2,1],

    },
    {
        "question": 'I see myself as someone who tends to be lazy',
        "optionScore": [5,4,3,2,1],  
    },
    {
        "question": 'I see myself as someone who is reserved.',
        "optionScore": [5,4,3,2,1],
    },
    {
        "question": 'I see myself as someone who is generally trusting.',
        "optionScore": [1, 2, 3, 4, 5],

    },
    {
        "question": 'I see myself as someone who is relaxed and handles stress well.',
        "optionScore": [5,4,3,2,1],  
    },
    {
        "question": 'I see myself as someone who has an active imagination.',
        "optionScore": [1, 2, 3, 4, 5], 
    },
    {
        "question": 'I see myself as someone who does a thorough job.',
        "optionScore": [1, 2, 3, 4, 5], 
    },
    {
        "question": 'I see myself as someone who is outgoing and sociable.',
        "optionScore": [1, 2, 3, 4, 5], 
    },
    {
        "question": 'I see myself as someone who tends to find fault with others.',
        "optionScore": [5,4,3,2,1],  
    },
    {
        "question": 'I see myself as someone who gets nervous easily.',
        "optionScore": [1, 2, 3, 4, 5],  
    },
];

let userValues = [];
let userTotals = [];

/**
 * Description, These are specific personality descriptors based on the five categories
 * The descriptions are in order of the five categories Openness, Conscientiousness, Extroversion, Agreeableness and Neuroticism
 * If you score high (above 5) in these categories, then you will get the personality descriptor from the first 5 descriptions
 * If you score low (below 5 exclusive), then you will get the personality descriptor from the last 5 descriptions.
 */  

let personalityDescriptors = [
    'You are inventive and curious,let people in your life know that you love to be challenged. Make sure you have creative outlets to express yourself. You also have to make sure your spouse or partner knows your level of adventure so your needs are met.',
    'You are efficient and organized. you want to make sure the people around you respect your desire to have a plan.',
    'You are outgoing and energetic. You like to be with people.',
    'You are friendly and compassionate, understanding others comes easy to you.',
    'You are sensitive and tend to be more nervous. You have to know your triggers, what makes you worry? And your calmers, what helps you calm down? So you can be more in control of your moods.',
    'You are consistent and cautious. You can easily be accustomed to habits and you can rely in your area of expertise.',
    'You are more easy-going and laid back. It does not come naturally for you to be organized, you like to go with the flow.',
    'You are more solitary and reserved, be sure not to force yourself to try being extroverted. Honor your introversion.',
    'You are more analytical and detached. Empathy is not a natural instinct to you, that is okay. Know that you must make more mental effort to put yourself in their shoes.',
    'You tend to be more secure and stable in your emotions.',
];


const startButton = document.getElementById("start-btn");
const initialPage = document.getElementById("initial-page");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const finishButton = document.getElementById("finish-btn");
const counterText = document.getElementById("counter");
const testArea = document.getElementById("test-area");
const radioButtons = document.getElementsByClassName('user-option');
const resultArea = document.getElementById("result-area");
const restartButton = document.getElementById("reset-btn");
const moveButton = document.getElementsByClassName("move-btn");

// Prompt that is shown to user for result.
const promptElement = document.getElementById("prompts");

// Radio Buttons that let you rate your agreement with the prompt
const optionElements = document.getElementsByClassName("user-option");

// The text that is shown to the user based on their calculated score
const personalityText = document.getElementsByClassName('pdescriptor');

let counter = 0;

//Load Questions

function generateQuestions() {
    promptElement.innerHTML = `${questions[counter].question}`;

    for (let j = 0; j < optionElements.length; j++) {
        optionElements[j].setAttribute("data-value", `${questions[counter].optionScore[j]}`);
    }
    for (let k = 0; k < radioButtons.length; k++) {
        radioButtons[k].checked = false;
    }
    counterText.innerHTML = `${counter+1}`;

}
 // To bring back the option the user selected for the previous question
function revertOptionState (){
    let lastValue = userValues[userValues.length - 1];
    let prevOption = document.querySelector('input[data-value="' + lastValue + '"]');
    prevOption.checked = true ;
}


// Start The Test
function runGame() {
    initialPage.classList.add('hide');
    testArea.classList.remove('hide');
    for (let i = 0; i < moveButton.length; i++) {
        moveButton[i].classList.remove('hide');
    }
    generateQuestions();
}


// Next and Tally Button

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
    let answerScore = parseInt(selectedOption.dataset.value);
    userValues.push(answerScore);
    counter++;
    if (counter < 10) {
        generateQuestions();
    } 
    
    if (counter == 9) {
        nextButton.classList.add('hide');
        finishButton.classList.remove('hide');
    }
}
// Previous and Remove Score Button

function loadPreviousQuestion() {
    if (counter <= 0) {
        alert('This is the first statement!');
    } else {
        if(counter == 9){
        nextButton.classList.remove('hide');
        finishButton.classList.add('hide');
        counter--;
        generateQuestions();
        revertOptionState();
        userValues.pop();
        }else{
            counter--;
            generateQuestions();
            revertOptionState();
            userValues.pop();
        }
    }
}

/**
 * This function calculates a score for each other five categories mentioned above. 
 * It adds the values for i and i+5, since the questions are ordered in the way that they both relate to one category
 * while not having two consecutive prompts that relate to the same category.
 * @param {userValues} This is an array of all user values
 * @returns {userTotals} It would return an array with a total score for each of the five categories.
 *  This total score is composed of an answer value of the two questions that relate to the category.
 */

function calculateScore() {
    for (let l = 0; l < 5; l++) {
        userTotals.push(userValues[l] + userValues[l + 5]);
    }
}
// Finish Button and Show Personality Description
function showResult() {
    if (!checkQuestionAnswered()) return;
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    let answerScore = parseInt(selectedOption.dataset.value);
    userValues.push(answerScore);
    testArea.classList.add('hide');
    prevButton.classList.add('hide');
    finishButton.classList.add('hide');
    calculateScore();
  	generatePersonality();
}

/**
 * This function iterates through the User's Total scores
 * If the score is higher or equal to 5 then it shows the user the personality descriptor that matches a high score in that category
 * If the score is lower, then its shows the descriptor that matches a low score in that category.
 * @param {userTotals} This is an array of the user's total score in each of the five categories
 * @returns {personalityText} Edits the inner HTML of each of the categories' personal descriptions to match with the score of the category.
 */
  
  function generatePersonality(){

    for (let m = 0; m < personalityText.length; m++) {
        if (userTotals[m] >= 5) {
            personalityText[m].innerHTML = personalityDescriptors[m];
        } else {
            personalityText[m].innerHTML = personalityDescriptors[m + 5];
        }
    }
    resultArea.classList.remove('hide');
}

//Restart Button Function
restartButton.addEventListener('click', restartTest);

function restartTest() {
    resultArea.classList.add('hide');
    initialPage.classList.remove('hide');
    userValues.length = 0;
    userTotals.length = 0;
    counter = 0;
}

// Attach event listeners.
startButton.addEventListener('click', runGame);
finishButton.addEventListener('click', showResult);
prevButton.addEventListener('click', loadPreviousQuestion);
nextButton.addEventListener('click', loadNextQuestion);
