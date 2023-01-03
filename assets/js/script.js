/* Radio Buttons */


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
    let extra1 = document.querySelector('input[name="question-1"]:checked'.value);
    let extra2 = document.querySelector('input[name="question-6"]:checked'.value);
    return [extra1 + extra2, "extraversion"];
    let extrascore = calculateExtraversion();
    console.log(extrascore)
}