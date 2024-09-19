document.getElementById('btn-add-money').addEventListener('click',function(){
    Event.preventDefault();


    document.getElementById('input-add-money').value;

    const pinNumberInput =document.getElementById('input-pin-num').value;
     
    if(pinNumberInput ==='1234'){
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber =parseFloat(balance);
    const newBalance = addMoneyNumber +balanceNumber;
      
    document.getElementById('balance').innerText =newBalance;

        }
    else(
        alert('Faild to add money! please try again.')
    )
})