function getInputValue(inputId){
    const indputFild = document.getElementById(inputId)
    const inputText = indputFild.value;
    if(inputText > 0){
        inputValue = parseFloat(inputText);
        return inputValue;
    }
}
function calculatemoney(){
    
}
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
    document.getElementById('totalExpenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = balance;
    }
    else{
        
    }
    }
})