const leapYears = function(year) {
    let y = year;
    if(y % 100 == 0){
        if((y % 4 == 0) && (y % 400 == 0))
        return true;
    }else if(y % 4 == 0){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
