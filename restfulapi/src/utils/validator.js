class Validator{

    constructor(number){
        this.number = number;
    }

    static NumberIsInRange(number, min, max){
        if(isNaN(number)) return false;
        if(number < min || number > max) return false;
        return true;
    }

    
    static HourMinuteAreValid(hour, minute){
        if(this.NumberIsInRange(hour, 0, 12) && this.NumberIsInRange(minute, 0, 60)) return true;
        return false;
    }
    
}

module.exports = Validator;