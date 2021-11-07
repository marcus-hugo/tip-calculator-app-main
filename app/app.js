// Global variables: bill amount, number of people, all % buttons

const bill = document.getElementById('bill');
const numOfPeople = document.getElementById('num-people');
const buttons = document.querySelectorAll('button');
const headingError = document.querySelector('.num-error');

// Loop over buttons:
    // get %  when button is clicked
    // divide total by number of persons = total per person
    // divide % by number of persons = tip per person

for(let button of buttons) {
    button.addEventListener('click', function() {
    // button.classList.add('clicked')
    // button.previousElementSibling.classList.remove('clicked')
    // button.nextElementSibling.classList.remove('clicked')

    // convert button text to a decimal number
    const buttonPercent = (parseInt(button.innerText, 10) * 0.01)
            
    // convert bill value to a number
    const billValue = parseInt(bill.value, 10)
            
    // multiply buttonPercent by billValue to get total tip amount
    const totalTip = buttonPercent * billValue
        
    // divide totalTip by numOfPeople to get total tip per person
    const tipPerPerson = (totalTip / numOfPeople.value)
        
    // get the total bill per person
    const totalPerPerson = (billValue / numOfPeople.value)
           
    if (numOfPeople.value === '') {
        numOfPeople.classList.add('error');
        headingError.style.visibility = 'visible';
    } else if(numOfPeople.value !== '') {
        numOfPeople.classList.remove('error');
        headingError.style.visibility = 'hidden';
    }

    // update the tip amount per person in calculation display
    document.getElementById('tip-value').innerText = tipPerPerson.toFixed(2)

    // update the total per person in calculation display
    document.getElementById('total-value').innerText = totalPerPerson.toFixed(2)
    })     
}

// get the value from the custom input
document.getElementById('custom').addEventListener('input', function() {
    let customValue = (parseInt(document.getElementById('custom').value, 10) * 0.01)

    const billValue = parseInt(bill.value, 10)
    const totalTip = customValue * billValue
    const tipPerPerson = (totalTip / numOfPeople.value)
    const totalPerPerson = (billValue / numOfPeople.value)
        
    document.getElementById('tip-value').innerText = tipPerPerson.toFixed(2)
    document.getElementById('total-value').innerText = totalPerPerson.toFixed(2)
})


// reset all values and display to 0
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('tip-value').innerText = '0.00'
    document.getElementById('total-value').innerText = '0.00'
})