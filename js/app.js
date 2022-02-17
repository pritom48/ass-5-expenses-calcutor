document.getElementById('calculate-btn').addEventListener('click', function () {
    //income
    const incomeInput = document.getElementById('income-input');
    const income = parseFloat(incomeInput.value);
    // console.log(income)

    //food expenses
    const foodInput = document.getElementById('food-input');
    const foodExpenses = parseFloat(foodInput.value);
    // console.log(foodExpenses)

    // rent expenses
    const rentInput = document.getElementById('rent-input');
    const rentExpenses = parseFloat(rentInput.value);
    // console.log(rentExpenses)

    // clothes expenses
    const clothesInput = document.getElementById('clothes-input');
    const clothesExpenses = parseFloat(clothesInput.value);
    // console.log(clothesExpenses)

    //total expenses
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    const totalExpensesField = document.getElementById('total-expenses');
    totalExpensesField.innerText = totalExpenses;
    // console.log(totalExpenses);

    //update balance
    const balance = income - totalExpenses;
    const balanceNow = document.getElementById('balance-now');
    balanceNow.innerText = balance;

    // clear all input field

    // clear income input
    incomeInput.value = '';
    // clear food input
    foodInput.value = '';
    //clear rent input 
    rentInput.value = '';
    //clear colthes input 
    clothesInput.value = '';
})