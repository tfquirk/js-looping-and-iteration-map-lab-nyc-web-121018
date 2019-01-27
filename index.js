// Code your solution in this file.

function lowerCaseDrivers(array) {
  return array.map(function(el) {return el.toLowerCase()}
  );
};

function nameToAttributes(array) {
  let newArray = [];
  array.map(function(fullname) {
    let twoNames = fullname.split(" ");
    let newOject = {firstName: twoNames[0], lastName: twoNames[1]};
    newArray.push(newOject);
  });
  return newArray;
};

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
};
