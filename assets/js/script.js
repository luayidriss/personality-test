// Questions, Answers and Scores

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

let  extroLow= "You are more solitary and reserved, be sure not to force yourself to try being extroverted. Honor your introversion.";
let extroHigh= "You are outgoing and energetic. You like to be with people.";
let agreeLow= "You are more analytical and detached. Empathy is not a natural instinct to you, that's okay. Know that you must make more mental effort to put yourself in their shoes.";
let agreeHigh= "You are friendly and compassionate, understanding others comes easy to you.";
let consLow= "You are more easy-going and laid back. It does not come naturally for you to be organized, you like to go with the flow.";
let consHigh= "You are efficient and organized. you want to make sure the people around you respect your desire to have a plan.";
let neuroLow= "You tend to be more secure and stable in your emotions.";
let neuroHigh= "You are sensitive and tend to be more nervous. You have to know your triggers–what makes you worry? And your calmers–what helps you calm down? So you can be more in control of your moods.";
let openLow= "You are consistent and cautious. You can easily be accustomed to habits and you can rely in your area of expertise.";
let openHigh= "You are inventive and curious,let people in your life know that you love to be challenged. Make sure you have creative outlets to express yourself. You also have to make sure your spouse or partner knows your level of adventure so your needs are met.";
     
// Variables
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const prevButton = document.getElementById("prev-btn")
const finishButton = document.getElementById("finish-btn")
const testArea = document.getElementById("test-area")
const resultArea = document.getElementById("result-area")
const restartButton = document.getElementById("reset-btn")
const moveButton = document.getElementsByClassName("move-btn")
const promptElement =document.getElementById("prompts")
var optionElements = []
for (let i=1; i<6;i++){
    optionElements.push(document.getElementById("option" + i));
}
var counter = 0
const extroText = document.getElementById("extroversion")
const agreeText = document.getElementById("agreeableness")
const consText = document.getElementById("conscientiousness")
const neuroText = document.getElementById("neuroticism")
const openText = document.getElementById("openness")

//Load Questions

function generateQuestions(){
    promptElement.innerHTML =`${prompts[counter]}`

    for(let j= 0; j < optionElements.length; j++){
        optionElements[j].setAttribute("data-value",`${answerValues[counter][j]}`)
    }
}

//Start Game
startButton.addEventListener('click', runGame)

function runGame(){
    startButton.classList.add('hide')
    testArea.classList.remove('hide')
    for (let i = 0; i < moveButton.length; i++ ) {
        moveButton[i].classList.remove('hide');
      }
    generateQuestions()
    }
    
// Next Button
nextButton.addEventListener('click', loadNextQuestion)
function loadNextQuestion(){
        readScore()
        counter++;
        if (counter < 10){
            generateQuestions()
        }
        else {
            nextButton.classList.add('hide');
            finishButton.classList.remove('hide')
        } 
    } 
// Previous Button
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

//Read and Tally Score
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
// Remove Score from Previous
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

// Finish Button and Show Personality Description
finishButton.addEventListener('click', showResult)
function showResult(){
    testArea.classList.add('hide')
    prevButton.classList.add('hide')
    finishButton.classList.add('hide')
    resultArea.classList.remove('hide')
    if (extroversion > 4){
        extroText.innerHTML = extroHigh
    }
    else {
        extroText.innerText = extroLow
    }
    if (agreeableness > 4){
        agreeText.innerHTML = agreeHigh
    }
    else {
        agreeText.innerText = agreeLow
    }
    if (conscientiousness > 4){
        consText.innerHTML = consHigh
    }
    else {
        consText.innerText = consLow
    }
    if (neuroticism > 4){
        neuroText.innerHTML = neuroHigh
    }
    else {
        neuroText.innerText = neuroLow

    }if (openness > 4){
        openText.innerHTML = openHigh
    }
    else {
        openText.innerText = openLow
    }
}

//Restart Button Function
restartButton.addEventListener('click', restartTest)
function restartTest (){
    resultArea.classList.add('hide')
    startButton.classList.remove('hide')
    counter -= 10;
}