var display = document.getElementById('display');

function inputvalue(inputElementValue) {
    var inputValue = inputElementValue;
    if (display.value === 'Error') {
        display.value = '';
    }
    if (inputValue === '+' || inputValue === '-' || inputValue === '*' || inputValue === '/') {
        if (display.value.slice(-1) === '+' || display.value.slice(-1) === '-' || display.value.slice(-1) === '*' || display.value.slice(-1) === '/') {
            display.value = display.value.slice(0, -1) + inputValue;
        } else {
            display.value += inputValue;
        }
    } else {
        display.value += inputValue;
    }
}

function deletelastentered() {
    display.value = display.value.slice(0, -1);
}

function resetvalue() {
    display.value = '';
    display.placeholder = '0';
}

function result() {
    try {
        var result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
