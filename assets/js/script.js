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
    
        
// Variables
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
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
    counter++;
    if (counter !== 10){
        generateQuestions()
    }
    else {
        alert("no more questions")
        showResult()
    }
}

//Previous Button Functionality
function loadPreviousQuestion(){

}

function showResult(){

}

