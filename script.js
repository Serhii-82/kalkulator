const display = document.querySelector('.calculator-screen');

const buttons = document.querySelectorAll(".calculator-keys>button");

let buttonNum = [];
let buttonOperator = [];
let buttonFunction = [];
let cache = [];
let cacheValue = "";

let oldEvet = "";
buttons.forEach((button) => {
    if(button.classList.contains('operator')) {
        buttonOperator.push(button);
        const operator = button.value;
        switch(operator) {

            
            
            case '+':
               
            button.addEventListener('click', (e) => { 
            if (cacheValue != "") { 
            add(parseFloat(cacheValue)); 
            }//add(parseFloat(display.value))          
                });
                break;
            case '-':
                button.addEventListener('click', (e) => {
            if (cacheValue != "") { 
            divide(parseFloat(cacheValue)); 
            }//add(parseFloat(display.value)
        });
                break;
            case '*':
                button.addEventListener('click', (e) => {
                     if (cacheValue !== "") {
                       multiply(parseFloat(cacheValue)); 
                     }//multiply(parseFloat(display.value));
                });
                break;
            case '/':
                button.addEventListener('click', (e) => {
                    if (cacheValue !== "") {
                        divide(parseFloat(cacheValue));
                    }//divide(parseFloat(display.value));
                });
                 break;
            case '.':
                buttonFunction.push(button);
                button.addEventListener('click', (e) => {
                setDisplayValue(e.target.value);
                }//setDisplayValue(e.target.value)
            );
            break;
            case 'all-clear': 
            buttonFunction.push(button); 
            button.addEventListener('click', (e) => {
                clearDisplay(); 
                cache = []; 
            }//clearDisplay()
            ); 
            break;
            case '=':
                buttonFunction.push(button);
                button.addEventListener('click', (_e) => {
                    equal();
                }//equal()
            );
                break;
                default:
                    buttonNum.push(button);
                    buttonFunction.push(button);
                    button.addEventListener('click', (e) => {
                        setDisplayValue(e.target.value);
                    }//setDisplayValue(e.target.value)
                );
                break;

                   }
    }else if(button.classList.contains('decimal')) {
        buttonFunction.push(button);
        button.addEventListener('click', (e) =>  {
            setDisplayValue(e.target.value);
        })
    }else if(button.classList.contains('all-clear')) {
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            clearDisplay();
            cache = [];
        });
    }else if(button.classList.contains('equal-sign')) {
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            equal();
        });
    }else {  
        buttonNum.push(button);
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            setDisplayValue(e.target.value);
            console.log(e.target.value);
        });
    }

});

function setDisplayValue(value) {
    
    display.innerText += value;
    console.log("value:"+value)
    cacheValue += value;
}
function clearDisplay() {
    display.innerText = "";
    cacheValue = "";
}
let test = true;
function add(a) {
    oldEvet = "+"
    cache.push(a);
        clearDisplay();

    console.log(cache);
    if(cache.length > 1) {
        clearDisplay();
        let sum = cache[0] + cache[1];
        cache = [];
        cache.push(sum);
    }
    // else {
    //     clearDisplay();
    // }
    console.log(cache);

}
function subtract(a) {
     oldEvet = "-"
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] - cache[1];
        cache = [];
        cache.push(sum);
    }
    else {
        clearDisplay();
    }
}
function divide(a) {
     oldEvet = "/"
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] / cache[1];
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    
    }
    else {
        clearDisplay();
    }
}
function multiply(a) {
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] * cache[1];
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
}
function equal() {
    switch(oldEvet) {
        case "+":
            add(parseFloat(cacheValue));
            break;
        case "-":
            subtract(parseFloat(cacheValue));
            break;
        case "*":
            multiply(parseFloat(cacheValue));
            break;
        case "/":
            divide(parseFloat(cacheValue));
            break;
    }// pacse ezil +.../ tao


    if(cache.length >= 1) {
        clearDisplay();
        console.log(cache);
        setDisplayValue(cache[0]);
        
    }
    else {
        clearDisplay()
    }
}
