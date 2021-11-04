
// get bill total
let bill = document.getElementById('bill');
    
// get number of people
const numOfPeople = document.getElementById('num-people');

// get % of total when button is clicked
// add % to bill
// divide (total + percent) = total per person
// get % of total and divide by number of persons = tip per person

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
    button.addEventListener('click', function() {

        // convert button text percent to decimal
        const buttonPercent = (parseInt(button.innerText, 10) * 0.01)
            console.log(buttonPercent)

        // convert bill value to a number
        const billValue = parseInt(bill.value, 10)
            console.log(billValue)

        // multiply buttonPercent by billValue to get total tip amount
        const totalTip = buttonPercent * billValue
        console.log(totalTip)

        // divide totalTip by numOfPeople to get total tip per person
        const tipPerPerson = (totalTip / numOfPeople.value)
        console.log(tipPerPerson)

        // get the total bill per person
        const totalPerPerson = (billValue / numOfPeople.value)
        
        // update the tip amount per person calculation display
        document.getElementById('tip-value').innerText = tipPerPerson

        // update the total per person calculation display
        document.getElementById('total-value').innerText = totalPerPerson
    })      
}