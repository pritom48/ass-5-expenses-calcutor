document.getElementById('calculate-btn').addEventListener('click', function () {
    //food expenses
    const foodIput = document.getElementById('food-input');
    const foodExpenses = parseFloat(foodIput.value);
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
    let totalExpensesField = document.getElementById('total-expenses');
    totalExpensesField.innerText = totalExpenses;
    console.log(totalExpenses);
})