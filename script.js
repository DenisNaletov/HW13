// task_1
// Create function calc() which gets values from “#first_value” and “#second_value”
// inputs and type of operation form “#operator” select and print to span “#res_calc”
// result of calculation

const first_value = document.getElementById('first_value');
const second_value = document.getElementById('second_value');
const operator = document.getElementById('operator');
const text_span = document.getElementById('res_calc');
let res_calc = 0;

function isNumber(x){
    if(x === ''){
        return false;
    }
    const numX = +x;
    if(isNaN(numX)){
        return false;
    } else {
        return true;
    }
}

function calc() {
    isNumber(first_value);
    isNumber(second_value);

    switch (operator.value) {
        case '+':
            res_calc = +first_value.value + +second_value.value;
            break;
        case '-':
            res_calc = +first_value.value - +second_value.value;
            break;
        case '*':
            res_calc = +first_value.value * +second_value.value;
            break;
        case  '/':
            if(second_value.value == 0){
                alert('Input the second value not a null!')
            } else {
                res_calc = +first_value.value / +second_value.value;
                break;
            }

    }
    console.log(res_calc);
    text_span.textContent = res_calc;
}

// task_2
// Create function addItem() which gets from input “#item_input” number, and puts it
// to array. After that, function should print to span “#sum_item” summary number for current array and
// print the whole array to span “#array_result” with JSON.stringify().

const item_input = document.getElementById('item_input');
const array = document.getElementById('array_result');
const arr = [];

function addItem() {
    isNumber(item_input.value);
    const input_value = item_input.value;
    arr.push(+input_value);
    let sum_item = 0;
    for (let arr_item of arr) {
        sum_item = sum_item + arr_item;
    }
    document.getElementById('sum_item').textContent = sum_item;
    array.textContent = JSON.stringify(arr);
}

//task_3
// Create function reverseNumber() which gets number from input “#number_input”
// and prints reversed number to span “#reverse_result”

const number = document.getElementById('number_input');
const span_number = document.getElementById('reverse_result');
let arr2 = [];

function reverseNumber(){
    isNumber(number);
    let arr1 = number.value.split("");
    for(let i = arr1.length - 1; i >= 0; i--){
        arr2.push(arr1[i]);
    }
    let arrReverse = arr2.join("");
    span_number.textContent = arrReverse;
}


