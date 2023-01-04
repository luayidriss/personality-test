/* Radio Buttons */
document.addEventListener("DOMContentLoaded", function() {
    for ( i=0; i<=10; i++ )
    {
        let questionNumber = i;
        return questions=`'input[name="question-`,${questionNumber},`"]:checked`;
        console.log(questions);
    }
}


function checkButton() {    
    var getSelectedValue = document.querySelector(   
        'input[name="question-1"]:checked');   
        
    if(getSelectedValue != null) {   
           
    }   
    else {   
        alert("You have not responded to all of the statements");   
    }   
}    

function calculateExtraversion(){
    let extra1 = document.querySelector('input[name="question-1"]:checked').value;
    let extra2 = document.querySelector('input[name="question-6"]:checked').value;
    let extrascore = calculateExtraversion();
    return [extra1 + extra2, "extraversion"];
    console.log(extrascore)
}