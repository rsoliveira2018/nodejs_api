const Validator = require('../utils/validator');

class Clock{

    constructor(hour, minute){

        if(minute == null) minute = 0;

        if (hour === 12) hour = 0; 
        if (minute === 60){
            minute = 0;
            hour = hour + 1;
            if(hour > 12){
                hour = hour - 12;
            } 
         }

        this.hour = hour;
        this.minute = minute;

    }

    calculateAngle(){
     
        const hour_angle = this.hour * 30 + this.minute * 0.5;
        const minute_angle = 6 * this.minute; 
        const resultedAngle = Math.abs(hour_angle - minute_angle);
        this.angle = Math.min(resultedAngle, 360 - resultedAngle);

        return this.angle;
    }

    valuesAreValid(){
        if(Validator.HourMinuteAreValid(this.hour, this.minute)) return true;
        return false;
    }

}

module.exports = Clock;