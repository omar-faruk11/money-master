// get inputValue 
function getInputValue(inputId) {
    const inputFild = document.getElementById(inputId)
    const inputText = inputFild.value;
    inputValue = parseInt(inputText);
    return inputValue;
}
// set total value in html 
function updateHtml(elementId, setvalue) {
    document.getElementById(elementId).innerText = setvalue;
}
// get error with Interesting way 
function getError(inputFildName) {
    document.getElementById('displayError').classList.remove('d-none');
    document.getElementById('inputName').innerText = inputFildName;
}
// calculat expenses part 
document.getElementById('calculateButton').addEventListener('click', function () {
    const income = getInputValue('incomeFild');
    const food = getInputValue('foodFild');
    const rent = getInputValue('rentFild');
    const clothes = getInputValue('clothesFild');
    // Handle error 
    if (isNaN(income) || income < 0) {
        getError('income value');
    } else if (isNaN(food) || food < 0) {
        getError('food value');
    } else if (isNaN(rent) || rent < 0) {
        getError('rent value');
    } else if (isNaN(clothes) || clothes < 0) {
        getError('clothes value ');
    } else {
        document.getElementById('displayError').classList.add('d-none');
        document.getElementById('displayErrorTwo').classList.add('d-none');
        const totalExpenses = food + rent + clothes;
        const balance = income - totalExpenses;
        if (income > totalExpenses) {
            // update on the html doc 
            updateHtml('totalExpenses', totalExpenses)
            updateHtml('balance', balance)
        } else {
            // Handle error
            document.getElementById('displayErrorTwo').classList.remove('d-none');
            updateHtml('totalExpenses', totalExpenses)
            updateHtml('balance', 00)
        }
    }
})

document.getElementById('saveButton').addEventListener('click', function () {
    const balanceText = document.getElementById('balance').innerText;
    const balance = parseInt(balanceText)
    const income = getInputValue('incomeFild');
    const save = getInputValue('saveFild');
    document.getElementById('displayErrorThree').classList.add('d-none');
    if (isNaN(save) || save < 0) {
        document.getElementById('displayErrorThree').classList.remove('d-none');
    } else {
        const saveAmount = parseInt((save / 100) * income);
        const remainingBalance = balance - saveAmount;
        if (saveAmount <= balance) {
            // update on the html doc 
            updateHtml('savingAmount', saveAmount);
            updateHtml('remainingBalance', remainingBalance);
            document.getElementById('displayErrorFour').classList.add('d-none');
        } else {
            // Handle error
            document.getElementById('displayErrorFour').classList.remove('d-none');
            updateHtml('savingAmount', 00);
            updateHtml('remainingBalance', 00);
        }
    }
})