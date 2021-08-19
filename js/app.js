function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin +'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin= getPin();                         //const pin pre mentioned
    document.getElementById('display-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function(event){

    const number = event.target.innerText;                    // event meaning???
    const calcInput = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = "";
        }
    }
    else{
        // const calcInput = document.getElementById("typed-numbers");      ??
        const previousNUmber = calcInput.value;
        const newNumber = previousNUmber + number;
        calcInput.value= newNumber;
    }

});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessege = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(pin == typedNumbers){
        successMessege.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        failError.style.display = 'block';
        successMessege.style.display = 'none';
    }

}