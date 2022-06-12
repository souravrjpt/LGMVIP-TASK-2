let showOutputDiv = document.getElementById("showoutput");

let previousOperator = null;
let presentValue = null;
let previousValue = null
let count = 0;
let pos = 0;

function checkOperator(element){
    let operators = ["+", "-", "/", "*", "="]
    let isOperator = false;
    for (let index = 0; index < operators.length; index++) {
        if(element == operators[index]){
            isOperator = true
            break
        }
    }
    return isOperator;
}

function clearInput(){
    showOutputDiv.value = "";
    pos = 0;
    count = 0;
    previousOperator = 0;
    presentValue = null;
    previousValue = null;
}

function onClickButton(element){
    if(element.value === "C"){
        clearInput();
        return
    }
    if(checkOperator(element.value) && showOutputDiv.value == ""){
            alert("Please Enter any number before operators!!!")
        }
    else if(checkOperator(showOutputDiv.value[showOutputDiv.value.length-1]) && checkOperator(element.value)){
        alert("Syntax Error");
    }
    
    else{
        if(showOutputDiv.value == ""){
            showOutputDiv.value = element.value;
            previousValue = parseFloat(element.value);
        }
        else if(count == 1 && checkOperator(element.value)){
            presentValue = parseFloat(showOutputDiv.value.slice(pos+1,showOutputDiv.value.length))
            // console.log(previousValue,presentValue);
            count = 0;
            calculate(previousValue, presentValue, previousOperator);
        }
        else{
            if(count == 0){
                console.log(showOutputDiv.value);
                previousValue = parseFloat(showOutputDiv.value)
            }
            if(element.value != "=" && checkOperator(element.value)){
                count += 1;
                previousOperator = element.value;
                pos = showOutputDiv.value.length;
            }
            if(element.value != "="){
                showOutputDiv.value = showOutputDiv.value + element.value;
            }
        }
    }
}


function calculate(previousValue, presentValue, choosedOperator){
    let result;
        switch(choosedOperator){
        case '+':
            result = previousValue + presentValue;
            break;
        case '-': 
            result = previousValue - presentValue;
            break;
        case '*': 
            result = previousValue * presentValue;
            break;
        case '/': 
            result = previousValue / presentValue;
            break;  


        }

    showOutputDiv.value = result;
}

// function calculate(value){
//     let values = []
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// }