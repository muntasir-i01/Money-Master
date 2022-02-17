//CALCULATION button handler
document.getElementById('calculation').addEventListener('click', function () {
    const income = document.getElementById('monthly-income');
    const newIncomeText = income.value;
    const newIncome = parseFloat(newIncomeText);

    if (isNaN(newIncome)) {
        alert("Monthly income is an invalid number");
        return false;
    }

    const foodExpenses = document.getElementById('food-id');
    const foodKhorochText = foodExpenses.value;
    let foodKhoroch = parseFloat(foodKhorochText);

    if (isNaN(foodKhoroch)) {
        alert("Amount for food expense is an invalid number");
        return false;
    }

    const rentExpenses = document.getElementById('rent-id');
    const rentKhorochText = rentExpenses.value;
    const rentKhoroch = parseFloat(rentKhorochText);

    if (isNaN(rentKhoroch)) {
        alert("Amount for rent expense is an invalid number");
        return false;
    }

    const clothesExpenses = document.getElementById('clothes-id');
    const clothesKhorochText = clothesExpenses.value;
    const clothesKhoroch = parseFloat(clothesKhorochText);
    if (isNaN(clothesKhoroch)) {
        alert("Amount for clothes expense is an invalid number");
        return false;
    }

    let totalExpense = document.getElementById('total-expense');
    let khoroch = foodKhoroch + rentKhoroch + clothesKhoroch;

    if (khoroch < newIncome) {
        totalExpense.innerText = khoroch;
    }

    else {
        alert('Your Expense is Greater than Your Income');
        return false;
    }

    let remainBalance = document.getElementById('remainig-balance');
    let balance = newIncome - totalExpense.innerText;
    remainBalance.innerText = balance;

})



//SAVE button handler
document.getElementById('save-id').addEventListener('click', function () {

    const income = document.getElementById('monthly-income');
    const newIncomeText = income.value;
    const newIncome = parseFloat(newIncomeText);

    if (isNaN(newIncome)) {
        alert("Monthly income is an invalid number");
        return false;
    }

    const foodExpenses = document.getElementById('food-id');
    const foodKhorochText = foodExpenses.value;
    const foodKhoroch = parseFloat(foodKhorochText);

    if (isNaN(foodKhoroch)) {
        alert("Amount for food expense is an invalid number");
        return false;
    }

    const rentExpenses = document.getElementById('rent-id');
    const rentKhorochText = rentExpenses.value;
    const rentKhoroch = parseFloat(rentKhorochText);

    if (isNaN(rentKhoroch)) {
        alert("Amount for rent expense is an invalid number");
        return false;
    }

    const clothesExpenses = document.getElementById('clothes-id');
    const clothesKhorochText = clothesExpenses.value;
    const clothesKhoroch = parseFloat(clothesKhorochText);
    if (isNaN(clothesKhoroch)) {
        alert("Amount for clothes expense is an invalid number");
        return false;
    }

    let totalExpense = document.getElementById('total-expense');
    let khoroch = foodKhoroch + rentKhoroch + clothesKhoroch;
    totalExpense.innerText = khoroch;


    let remainBalance = document.getElementById('remainig-balance');
    let balance = newIncome - totalExpense.innerText;
    remainBalance.innerText = balance;

    const saveInput = document.getElementById('save-input');
    const saveInputText = saveInput.value;
    const totalSave = parseFloat(saveInputText);
    if (isNaN(totalSave)) {
        alert("Percentage for saving is an invalid number");
        return false;
    }


    let savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = newIncome * (totalSave / 100);

    let lastBalance = document.getElementById('last-balance');

    if (lastBalance.innerText <= remainBalance) {
        lastBalance.innerText = '0';
        // alert("Remaining Balance 0");      
    }

    else {
        lastBalance.innerText = remainBalance.innerText - savingAmount.innerText;
    }

})