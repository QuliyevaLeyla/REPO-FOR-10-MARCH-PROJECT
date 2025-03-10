let num1 = 0;
let num2 = 0;
let result = 0;

function clearNumbers() {
    document.getElementById("result").innerHTML = "__";
    document.getElementById("1num").value = "";
    document.getElementById("2num").value = "";
}

function sum(){
num1 = Number(document.getElementById("1num").value)
num2 = Number(document.getElementById("2num").value)
result = num1 + num2;
document.getElementById("result").innerHTML=result;
}            

function sub(){
    num1 = Number(document.getElementById("1num").value)
    num2 = Number(document.getElementById("2num").value)
    result = num1 - num2;
    document.getElementById("result").innerHTML=result;
    }

function mul(){
    num1 = Number(document.getElementById("1num").value)
    num2 = Number(document.getElementById("2num").value)
    result = num1 * num2;
    document.getElementById("result").innerHTML=result;
    }

function div(){
    num1 = Number(document.getElementById("1num").value)
    num2 = Number(document.getElementById("2num").value)
    result = num1 / num2;
    document.getElementById("result").innerHTML=result;
    }    

function equal() {
    
}  