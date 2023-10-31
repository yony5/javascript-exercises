const leapYears = function(year) {
  let _leapYear = year % 4;

  const result = check100Yr(year);

  if (_leapYear === 0 && result === true){
      return true;
  }else{
      return false;
  }

};


const check100Yr = function (year){
    if((year % 100) === 0 && year % 400 === 0){
        return true;
    }else if((year % 100) === 0){
        return false;
    }else {
        return true;
    }

}


// Do not edit below this line
module.exports = leapYears;
