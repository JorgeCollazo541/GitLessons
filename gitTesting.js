/* --A simple calculator to add and subtract numbers-- */

function add(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2
    document.getElementById('result').innerText = 'Result: ' + result;
}

function subtract(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2
    document.getElementById('result').innerText = 'Result: ' + result;
}

function multiply(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2
    document.getElementById('result').innerText = 'Result: ' + result;
}


/* -- Will take a list of numbers and give the largest or smallest-- */

