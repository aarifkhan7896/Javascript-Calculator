const button = document.querySelectorAll('button');
const result = document.getElementById('result');
const screen = document.getElementById('screen');
let screenValue ="";
button.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        button.forEach((btn)=>{
        btn.style.backgroundColor='transparent'; 
        result.style.backgroundColor='orange';
        })
        btn.style.backgroundColor='#333';
        result.style.backgroundColor='orange';
    })
})

for(btn of button){
    btn.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue="";
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}