// get inputValue 
function getInputValue(inputId){
    const indputFild = document.getElementById(inputId)
    const inputText = indputFild.value;
    if(inputText > 0){
        inputValue = parseInt(inputText);
        return inputValue;
    }
}
// set total value in html 
function updateHtml(elementId, setvalue){
    document.getElementById(elementId).innerText = setvalue;
}

// calculat expenses part 
document.getElementById('calculateButton').addEventListener('click',function(){
    const income = getInputValue('incomeFild');
    const food = getInputValue('foodFild');
    const rent = getInputValue('rentFild');
    const clothes = getInputValue('clothesFild');
    if(isNaN(income) || income < 0){
        
    }
    else if(isNaN(food) || food < 0){
        
    }
    else if(isNaN(rent) || rent < 0){

    }
    else if(isNaN(clothes) || clothes < 0){

    }
    else{
    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses;
    if(income > totalExpenses){
    // update on the html doc 
    updateHtml('totalExpenses',totalExpenses)
    updateHtml('balance',balance)
    }
    else{
        
    }
    }
})

document.getElementById('saveButton').addEventListener('click',function(){
    const balanceText = document.getElementById('balance').innerText;
    const balance = parseInt(balanceText)
    const income = getInputValue('incomeFild');
    const save = getInputValue('saveFild');
    if(isNaN(save) || save < 0){
        console.log('dkjfdkfjkdjf')
    }
    else{
    const saveAmount =(save / 100) * income;
    const remainingBalance = balance - saveAmount;
    // update on the html doc 
    if(saveAmount < balance){
    updateHtml('savingAmount',saveAmount);
    updateHtml('remainingBalance',remainingBalance)
    }
    else{

    }
    }
})
