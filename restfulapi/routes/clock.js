const express = require('express');
const insertAngleToDb = require('../database/queries/3_insert');
const getAngleFromDb = require('../database/queries/4_select');
const router = express.Router();

router.get('/:hour/:minute?', (req, res) =>{
    const hour = req.params.hour;
    const minute = req.params.minute;
    if (minute == null) minute = 0;

    if(!hourMinuteIsValid(hour, minute)){
        res.status(400).send({
            message: "the 'hour' or 'minute' were not informed correctly."
        });
    }

    getAngleFromDb(hour, minute).then(function(result){
        if(result){
            res.status(200).send({
                angle: result
            });
        }else{
            const calculatedAngle = calculateAngle(hour, minute);
            insertAngleToDb(hour, minute, calculatedAngle);
            res.status(200).send({
                angle: calculatedAngle
            })
        }
    });
});

function numberIsInRange(number = 0, min, max){
    if(isNaN(number)) return false;
    if(number < min || number > max) return false;
    return true;
}

function hourMinuteIsValid(hour, minute = 0){
    if(numberIsInRange(hour, 0, 12) && numberIsInRange(minute, 0, 60)) return true;
    return false;
}

function calculateAngle(hour, minute = 0){
    
    if (hour === 12) hour = 0; 
    
    if (minute === 60){
        minute = 0;
        hour = hour + 1;
        if(hour > 12){
            hour = hour - 12;
        } 
     }
 
    const hour_angle = hour * 30 + minute * 0.5;
    const minute_angle = 6 * minute; 
    const angle = Math.abs(hour_angle - minute_angle);
 
    return Math.min(angle, 360 - angle);

}

module.exports = router;