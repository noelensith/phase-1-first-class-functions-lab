// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//drivers.slice() creates a copy of arrays
//First two drivers are selected with (0,2) etc. for last 2 drivers
const returnFirstTwoDrivers = () => drivers.slice(0, 2);
const returnLastTwoDrivers = () => drivers.slice(2, 4);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    const fareMultiplier = (x) => multiplier * x;
    return fareMultiplier
}
// 2 passes through the function createFareMultiplier(multiplier),
// 2 then multiplies whatever is passes through x and doubles the fare.
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}
