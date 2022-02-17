//CALCULATION button handler
document.getElementById('calculation').addEventListener('click', function () {
    const income = document.getElementById('monthly-income');
    const newIncomeText = income.value;
    const newIncome = parseFloat(newIncomeText);

    if (isNaN(newIncome) || newIncome < 0) {
        income.value = '';
        alert("Monthly income is an invalid number");
        return false;
    }

    const foodExpenses = document.getElementById('food-id');
    const foodKhorochText = foodExpenses.value;
    const foodKhoroch = parseFloat(foodKhorochText);

    if (isNaN(foodKhoroch) || foodKhoroch < 0) {
        foodExpenses.value = 0;
        alert("Enter a valid number for Food Expense:");
        return false;
    }

    const rentExpenses = document.getElementById('rent-id');
    const rentKhorochText = rentExpenses.value;
    const rentKhoroch = parseFloat(rentKhorochText);

    if (isNaN(rentKhoroch) || rentKhoroch < 0) {
        rentExpenses.value = 0;
        alert("Enter a Valid Number for rent expense:");
        return false;
    }



    const clothesExpenses = document.getElementById('clothes-id');
    const clothesKhorochText = clothesExpenses.value;
    const clothesKhoroch = parseFloat(clothesKhorochText);

    if (isNaN(clothesKhoroch) || clothesKhoroch < 0) {
        clothesExpenses.value = 0;
        alert("Enter a valid number for Clothes Expense");
        return false;
    }

    let totalExpense = document.getElementById('total-expense');
    let khoroch = parseFloat(foodKhoroch + rentKhoroch + clothesKhoroch);

    if (khoroch < newIncome) {
        totalExpense.innerText = khoroch;
    }

    else {
        alert('Your Expense is Greater than Your Income');
        return false;
    }

    let remainBalance = document.getElementById('remainig-balance');
    remainBalance.innerText = parseFloat(newIncome - totalExpense.innerText);    

})



//SAVE button handler
document.getElementById('save-id').addEventListener('click', function () {

    const income = document.getElementById('monthly-income');
    const newIncomeText = income.value;
    const newIncome = parseFloat(newIncomeText);

    if (isNaN(newIncome) || newIncome < 0) {
        newIncome.value = 0;
        alert("Monthly income is an invalid number");
        return false;
    }

    const foodExpenses = document.getElementById('food-id');
    const foodKhorochText = foodExpenses.value;
    const foodKhoroch = parseFloat(foodKhorochText);

    if (isNaN(foodKhoroch) || foodKhoroch < 0) {
        foodKhoroch.value = 0;
        alert("Amount for food expense is an invalid number");
        return false;
    }

    const rentExpenses = document.getElementById('rent-id');
    const rentKhorochText = rentExpenses.value;
    const rentKhoroch = parseFloat(rentKhorochText);

    if (isNaN(rentKhoroch) || rentKhoroch < 0) {
        rentKhoroch.value = 0;
        alert("Amount for rent expense is an invalid neagt number");
        return false;
    }

    const clothesExpenses = document.getElementById('clothes-id');
    const clothesKhorochText = clothesExpenses.value;
    const clothesKhoroch = parseFloat(clothesKhorochText);

    if (isNaN(clothesKhoroch) || clothesKhoroch < 0) {
        clothesKhoroch.value = 0;
        alert("Amount for clothes expense is an invalid number");
        return false;
    }

    let totalExpense = document.getElementById('total-expense');
    let khoroch = parseFloat(foodKhoroch + rentKhoroch + clothesKhoroch);
    totalExpense.innerText = khoroch;


    let remainBalance = document.getElementById('remainig-balance');    
    remainBalance.innerText = parseFloat(newIncome - totalExpense.innerText);
    

    const saveInput = document.getElementById('save-input');
    const saveInputText = saveInput.value;
    const totalSave = parseFloat(saveInputText);

    if (isNaN(totalSave) || totalSave < 0) {
        saveInput.value = '';
        alert("Percentage for saving is an invalid number");
        return false;
    }


    let savingAmount = document.getElementById('saving-amount');
    let save = parseFloat(newIncome * (totalSave / 100));
    
    
    if (save > remainBalance.innerText) {        
        alert('Your desired savings is higher than your remaining balance'); 
        savingAmount.innerText = 0;  
          
    }

    else {
        savingAmount.innerText = save;
    }

    let lastBalance = document.getElementById('last-balance');
    lastBalance.innerText = parseFloat(remainBalance.innerText - savingAmount.innerText);

    if (lastBalance.innerText < 0) {
        lastBalance.innerText = 0;
        /* alert('No remaining balance');
        return false; */
    }

})