// Questions, Answers and Values Variables

let prompts = ['I see myself as someone who is reserved', 
'I see myself as someone who is generally trusting',
'I see myself as someone who tends to be lazy',
'I see myself as someone who is relaxed and handles stress well',
'I see myself as someone who is outgoing and sociable',
'I see myself as someone who has few artistic qualities',
'I see myself as someone who tends to find fault with others',
'I see myself as someone who does a thorough job',
'I see myself as someone who gets nervous easily',
'I see myself as someone who has an active imagination']

let answerValues =[
    prompt1= [5,4,3,2,1],
    prompt2= [1,2,3,4,5],
    prompt3= [5,4,3,2,1],
    prompt4= [5,4,3,2,1],
    prompt5= [5,4,3,2,1],
    prompt6= [1,2,3,4,5],
    prompt7= [5,4,3,2,1],
    prompt8= [1,2,3,4,5],
    prompt9= [1,2,3,4,5],
    prompt10= [1,2,3,4,5]
]

let extroversion= 0;
let agreeableness = 0;
let conscientiousness = 0;
let neuroticism = 0;
let openness = 0


     
// Variables
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const prevButton = document.getElementById("prev-btn")
const testArea = document.getElementById("test-area")
const moveButton = document.getElementsByClassName("move-btn")
const promptElement =document.getElementById("prompts")
var optionElements = []
for (let i=1; i<6;i++){
    optionElements.push(document.getElementById("option" + i));
}
var counter = 0
//Load Questions

function generateQuestions(){
    promptElement.innerHTML =`${prompts[counter]}`

    for(let j= 0; j < optionElements.length; j++){
        optionElements[j].setAttribute("data-value",`${answerValues[counter][j]}`)
    }
}

//Start Game Function
startButton.addEventListener('click', runGame)

function runGame(){
    startButton.classList.add('hide')
    testArea.classList.remove('hide')
    for (let i = 0; i < moveButton.length; i++ ) {
        moveButton[i].classList.remove('hide');
      }
    generateQuestions()
    }
    
// Next Buttion Functionality
nextButton.addEventListener('click', loadNextQuestion)
function loadNextQuestion(){
        readScore()
        counter++;
        if (counter < 10){
            generateQuestions()
        }
        else {
            nextButton.innerText = `Finish`;
            calculateScores();
        } 
    }   

prevButton.addEventListener('click', loadPreviousQuestion)
function loadPreviousQuestion(){
    counter--;
    removeScore()
    if (counter < 0){
        alert('This is the first question')
    }
    else {
        generateQuestions()
    } 
    }

function readScore(){
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    else{
        var answerScore = parseInt(selectedOption.nextElementSibling.getAttribute('data-value'));
        if(counter == 0 || counter == 5){
            extroversion += answerScore;}
        else if(counter == 1 || counter ==  6){
            agreeableness += answerScore;}
        else if(counter == 2 || counter ==  7){
            conscientiousness += answerScore;}
        else if(counter == 3 || counter ==  8){
            neuroticism += answerScore;}
        else if(counter == 4 || counter ==  9){
            openness += answerScore;}
        else{
        }
}}

function removeScore(){
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    var answerScore = parseInt(selectedOption.nextElementSibling.getAttribute('data-value'));
        if(counter == 0 || counter == 5){
            extroversion -= answerScore;}
        else if(counter == 1 || counter ==  6){
            agreeableness -= answerScore;}
        else if(counter == 2 || counter ==  7){
            conscientiousness -= answerScore;}
        else if(counter == 3 || counter ==  8){
            neuroticism -= answerScore;}
        else if(counter == 4 || counter ==  9){
            openness -= answerScore;}
        else{
            alert("Invalid Entry");
        }
}
