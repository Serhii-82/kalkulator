const display = document.querySelector('.calculator-screen');

const buttons = document.querySelectorAll(".calculator-keys>button");

let buttonNum = [];
let buttonOperator = [];
let buttonFunction = [];
let cache = [];
let cacheValue =  "";
buttons.forEach((button) => {
    if(button.classList.contains('operator')) {
        buttonOperator.push(button);
        const operator = button.value;
        switch(operator) {

            case '=':
                button.addEventListener('click', (e) => {
                    equal();
                });
                break; 
            case '+':
                button.addEventListener('click', (e) => {
                    if (cacheValue !== "") {
                        add(parseFloat(cacheValue));
                    }
                });
                break;
            case '-':
                button.addEventListener('click', (e) => {
                    if (cacheValue !== "") {
                        subtract(parseFloat(cacheValue));
                    }
                });
                break;
            case '*':
                button.addEventListener('click', (e) => {
                     if (cacheValue !== "") {
                       multiply(parseFloat(cacheValue)); 
                     }
                });
                break;
            case '/':
                button.addEventListener('click', (e) => {
                    if (cacheValue !== "") {
                        divide(parseFloat(cacheValue));
                    }
                });
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
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] + cache[1];
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
}
function subtract(a) {
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] - cache[1];
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }


}
function equal(){
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] - cache[1];
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
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
}
 // Sprawdź, jaki operator został wybrany jako ostatni i czy została podana liczba, wtedy wykonaj działanie ostatniego operatora.
    // Jeśli nie podano liczby, a kliknięto operator, wyświetl wartość z pamięci podręcznej (cache).
// Metoda/funkcja mnożenia

// Metoda/funkcja dzielenia

// Metoda/funkcja dodawania liczb zmiennoprzecinkowych: dodawany jest przecinek, a wartości float muszą zawierać kropkę (np. 1.2 zamiast 1,2).

// Te zmienne nie są wykorzystywane. Dodaje się do nich przyciski z kalkulatora, ale potem nie są używane.
// Pasowałoby je usunąć z kodu.
// let buttonNum = [];
// let buttonOperator = [];
// let buttonFunction = [];

// Gdy wszystko będzie działać, dopisz komentarze wyjaśniające działanie kodu oraz udokumentuj go w plikach Markdown dokumentacji:

// Ten kod powinien być w Moduł 0: Kalkulator