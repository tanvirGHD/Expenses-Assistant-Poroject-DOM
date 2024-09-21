//getting all the value



//add even listener for calculate button
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click',function(){
    
    // call inputs (income,software,courses,internet)
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    

    //Calculation
    const totalExpenses = software + courses + internet;
    const balance = income -totalExpenses;
    
    //result 
    // total-expenses
    const totalExpensesElement = document.getElementById("total-expenses");
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    //balance
    const totalBalanceElement = document.getElementById("balance");
    totalBalanceElement.innerText = balance.toFixed(2);

    //remove hidden result
    const result = document.getElementById("results");
    result.classList.remove('hidden');
})





//add even listener for saving button

const calculateSavingsButton =document.getElementById('calculate-savings');
calculateSavingsButton.addEventListener('click',function(){

    

    //call inputs (income,software,courses,internet)
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const savingPercentace = parseFloat(document.getElementById('savings').value);


    // percentage calculatation
    const totalExpenses = software + courses + internet;
    const balance = income -totalExpenses;

    // saving balance
    const savingAmount = (savingPercentace * balance) / 100;
    
    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);


    //remaning balance
    const remaningBalance = balance -  savingAmount; 
    
    const remaningElement = document.getElementById('remaining-balance');
    remaningElement.innerText = remaningBalance.toFixed(2);
    
    
     
    
})

