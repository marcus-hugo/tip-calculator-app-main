
// Global variables

const bill = document.getElementById('bill');
const buttons = document.querySelectorAll('.percent-button');
const customButton = document.getElementById('custom');
const numOfPeople = document.getElementById('num-people');
const headingError = document.querySelector('.num-error');
const resetButton = document.getElementById('reset');
const tipDisplay = document.getElementById('tip-value');
const totalDisplay = document.getElementById('total-value');

// Loop over buttons:
    // get % when button is clicked
    // divide total by number of persons = total per person
    // divide % by number of persons = tip per person

for (let button of buttons) {
    button.addEventListener('click', function() {
    
    // based on: https://travis.media/how-to-add-and-remove-a-class-from-list-items-with-pure-javascript/
    (document.querySelector('.clicked')) ? document.querySelector('.clicked').classList.remove('clicked') : '';
    this.classList.add('clicked');

    // convert button text to a decimal number
    const buttonPercent = (parseFloat(button.innerText, 10) * 0.01);
            
    // convert bill value to a number
    const billValue = parseFloat(bill.value);

    const numPeople = parseInt(numOfPeople.value, 10);

    // multiply buttonPercent by billValue to get total tip amount
    const totalTip = buttonPercent * billValue;
        
    /* divide totalTip by numOfPeople to get total tip per person
    this helped with keeping the decimals from being rounded
    https://stackoverflow.com/questions/10808671/javascript-how-to-prevent-tofixed-from-rounding-off-decimal-numbers */

    const tipPerPerson = (Math.trunc((totalTip / numPeople)*100)) / 100;

    // get the total bill per person
    const totalPerPerson = (billValue / numOfPeople.value).toFixed(2);

    // Toggling error styling

    if (numOfPeople.value === '') {
        numOfPeople.classList.add('error');
        headingError.style.visibility = 'visible';
        reset.style.opacity = '0.35';
        tipDisplay.innerText = '0.00';
        totalDisplay.innerText = '0.00';
    } else if (numOfPeople.value !== '') {
        numOfPeople.classList.remove('error');
        headingError.style.visibility = 'hidden';
        reset.style.opacity = '1';
        reset.style.cursor = 'pointer';
    }

    // update the tip amount per person in calculation display
    tipDisplay.innerText = tipPerPerson;

    // update the total per person in calculation display
    totalDisplay.innerText = totalPerPerson;

    })     
}

/* get the value from the custom input
 this helped with adding two event listeners: 
 https://gomakethings.com/listening-to-multiple-events-in-vanilla-js/ */

const customButtonEvents = function() {
    const customValue = (parseFloat(customButton.value, 10) * 0.01);
    const billValue = parseFloat(bill.value, 10);
    const numPeople = parseInt(numOfPeople.value, 10);
    const totalTip = customValue * billValue;
    const tipPerPerson = (Math.trunc((totalTip / numPeople)*100)) / 100;
    const totalPerPerson = (billValue / numOfPeople.value);
        
    if (numOfPeople.value === '') {
        numOfPeople.classList.add('error');
        headingError.style.visibility = 'visible';
        reset.style.opacity = '0.35';
        
    } else if(numOfPeople.value !== '') {
        numOfPeople.classList.remove('error');
        headingError.style.visibility = 'hidden';
        reset.style.opacity = '1';
        reset.style.cursor = 'pointer';
    }

    tipDisplay.innerText = tipPerPerson;
    totalDisplay.innerText = totalPerPerson;
}
// add event listener, pass in the event type, and call the function
customButton.addEventListener('input', customButtonEvents);
customButton.addEventListener('click', customButtonEvents);

// reset all values, display to 0, and styles
resetButton.addEventListener('click', function() {
    document.getElementById('tip-value').innerText = '0.00'
    document.getElementById('total-value').innerText = '0.00'
    numOfPeople.classList.remove('error');
    headingError.style.visibility = 'hidden';
    reset.style.opacity = '0.35';
    reset.style.cursor = 'default';
    for (let button of buttons) {
        button.classList.remove('clicked')
    }
})