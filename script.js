console.log("hello");


// Basic Math functions
function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x,y){
    if(y){
        return x / y;
    } else{
        return "Error"
    }   
}

let num1;
let num2;
let count = 0;
let info = "";
let operation;
let isOperationClicked = false;
let isequal = false;
let iseqclickedlast = false;

function operate(x, y, operation) {
    x = Number(x);
    y = Number(y);
    let result;
    if (operation == "+") {
        result = add(x, y);
    } else if (operation == "-") {
        result = subtract(x, y);
    } else if (operation == "*") {
        result = multiply(x, y);
    } else if (operation == "/") {
        result = divide(x, y);
    }
    if(result == "Error"){
        return "Error";
    }
    return result % 1 !== 0 ? result.toFixed(5) : result;  // Rounds to 5 decimal places if necessary
}

function excution(op){
    info = display.textContent;
    if(count == 2){
        num2 = info;
        display.textContent = operate(num1, num2, operation);
        operation = op;
        num1 = display.textContent
        //reset the count and info;
        if(isequal){
            count = 0;
            isequal = false;
            iseqclickedlast = true;
        }else {
            count = 1;
            iseqclickedlast = false;
        }
        info = ""
    }else if(count == 1){ 
        num1 = info;
        info = ""   
        iseqclickedlast = false;
}
}

function handleinput(){
    if (isOperationClicked){
        isOperationClicked = false // Reset to false since operation first click is done
        display.textContent = "";
    }

}


// HTML:
const mainDiv = document.createElement("div");
mainDiv.classList.add("calc");

// Display:
let display = document.createElement("div");
display.id = "display";
display.style.color = 
display.textContent = ""
mainDiv.appendChild(display);

// Buttons:
const buttonscont = document.createElement("div");
buttonscont.classList.add("buttonscont")

// row 1
const rowOne = document.createElement("div");
rowOne.classList.add("rows")
const oneBtn = document.createElement("button");
oneBtn.textContent = "1";
oneBtn.addEventListener("click", () => {
    handleinput();
    display.textContent += "1"
})
oneBtn.classList.add("buttons");
oneBtn.classList.add("numbers");
rowOne.appendChild(oneBtn);


const twoBtn = document.createElement("button");
twoBtn.textContent = "2";
twoBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "2"
})
twoBtn.classList.add("buttons");
twoBtn.classList.add("numbers");
rowOne.appendChild(twoBtn);

const threeBtn = document.createElement("button");
threeBtn.textContent = "3";
threeBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "3"
})
threeBtn.classList.add("buttons");
threeBtn.classList.add("numbers");
rowOne.appendChild(threeBtn);

const addBtn = document.createElement("button");
addBtn.textContent = "+";
addBtn.addEventListener("click",() => {
    if (!isOperationClicked) {
        count++;
        excution("+");
        operation = "+";
        isOperationClicked = true;
    } else {
        operation = "+";
    }
});
addBtn.classList.add("buttons");
addBtn.classList.add("op");
rowOne.appendChild(addBtn);

buttonscont.appendChild(rowOne);

// row 2
const rowTwo = document.createElement("div");
rowTwo.classList.add("rows")

const fourBtn = document.createElement("button");
fourBtn.textContent = "4"
fourBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "4"
})
fourBtn.classList.add("buttons");
fourBtn.classList.add("numbers");
rowTwo.appendChild(fourBtn);

const fiveBtn = document.createElement("button");
fiveBtn.textContent = "5"
fiveBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "5"
})
fiveBtn.classList.add("buttons");
fiveBtn.classList.add("numbers");
rowTwo.appendChild(fiveBtn);

const sixBtn = document.createElement("button");
sixBtn.textContent = "6"
sixBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "6"
})
sixBtn.classList.add("buttons");
sixBtn.classList.add("numbers");
rowTwo.appendChild(sixBtn);

const subtractBtn = document.createElement("button");
subtractBtn.textContent = "-";
subtractBtn.addEventListener("click",() => {
    if (!isOperationClicked) {
        count++;
        excution("-");
        operation = "-";
        isOperationClicked = true;
    } else {
        operation = "-";
    }
});
subtractBtn.classList.add("buttons");
subtractBtn.classList.add("op");
rowTwo.appendChild(subtractBtn);

buttonscont.appendChild(rowTwo);

// row 3:
const rowThree = document.createElement("div");
rowThree.classList.add("rows")

const sevenBtn = document.createElement("button");
sevenBtn.textContent = "7"; 
sevenBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "7"
})
sevenBtn.classList.add("buttons");
sevenBtn.classList.add("numbers");
rowThree.appendChild(sevenBtn); 

const eightBtn = document.createElement("button");
eightBtn.textContent = "8"; 
eightBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "8"
})
eightBtn.classList.add("buttons");
eightBtn.classList.add("numbers");
rowThree.appendChild(eightBtn); 

const nineBtn = document.createElement("button");
nineBtn.textContent = "9"; 
nineBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "9"
})
nineBtn.classList.add("buttons");
nineBtn.classList.add("numbers");
rowThree.appendChild(nineBtn); 

const multiplyBtn = document.createElement("button");
multiplyBtn.textContent = "×"; 
multiplyBtn.addEventListener("click", () => {
    if (!isOperationClicked) {
        count++;
        excution("*");
        operation = "*";
        isOperationClicked = true;
    } else {
        operation = "*";
    }
});
multiplyBtn.classList.add("buttons");
multiplyBtn.classList.add("op");
rowThree.appendChild(multiplyBtn); 


buttonscont.appendChild(rowThree); 



// row 4:
const rowFour = document.createElement("div");
rowFour.classList.add("rows")



const equalBtn = document.createElement("button");
equalBtn.textContent = "="; 
equalBtn.addEventListener("click", () => {
    if(!iseqclickedlast){
        count++;
        isequal = true;
    }
  excution(operation);
});
equalBtn.classList.add("buttons");
equalBtn.classList.add("eq");
rowFour.appendChild(equalBtn); 

const zeroBtn = document.createElement("button");
zeroBtn.textContent = "0";
zeroBtn.addEventListener("click",() => {
    handleinput();
    display.textContent += "0"
})
zeroBtn.classList.add("buttons");
zeroBtn.classList.add("numbers");
rowFour.appendChild(zeroBtn); 


const clearBtn = document.createElement("button");
clearBtn.textContent = "CE"; 
clearBtn.addEventListener("click", () => {
    display.textContent = "";
    num1 = undefined;
    num2 = undefined;
    operation = undefined;
    count = 0;
    isOperationClicked = false;
    isequal = false;
    iseqclickedlast = false;
});
clearBtn.classList.add("buttons");
clearBtn.classList.add("clear");
rowFour.appendChild(clearBtn); 

const divideBtn = document.createElement("button");
divideBtn.textContent = "÷"; 
divideBtn.addEventListener("click", () => {
    if (!isOperationClicked) {
        count++;
        excution("/");
        operation = "/";
        isOperationClicked = true;
    } else {
        operation = "/";
    }
});
divideBtn.classList.add("buttons");
divideBtn.classList.add("op");
rowFour.appendChild(divideBtn); 

buttonscont.appendChild(rowFour); 

mainDiv.appendChild(buttonscont);
document.body.appendChild(mainDiv);


// Event handelers



