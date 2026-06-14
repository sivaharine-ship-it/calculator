const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function toggleSign() {
    if (display.value !== '' && display.value !== '0' && display.value !== 'Error') {
        try {
            let currentVal = eval(display.value); 
            display.value = currentVal * -1;
        } catch (error) {

        }
    }
}


function calculateResult() {
    try {
        if (display.value !== '') {
            let result = eval(display.value);

            if (result % 1 !== 0) {
                display.value = Number(result.toFixed(4));
            } else {
                display.value = result;
            }
        }
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

