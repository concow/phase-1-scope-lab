// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'some value';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    //return customerName.toUpperCase(); They don't want this. Want poor code.
    
}

function setBestCustomer() {
    bestCustomer = 'not bob';  //declare global variable in function scope
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Chucky'
}