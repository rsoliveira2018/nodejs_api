const express = require('express');
const router = express.Router();

const Clock = require('../models/clock');
const ClockRepository = require('../repositories/clockRepository');

router.get('/:hour/:minute?', (req, res) =>{

    const clock = new Clock(req.params.hour, req.params.minute);
    const clockRepository = new ClockRepository(clock);

    if(!clock.valuesAreValid()){
        res.status(400).send({
            message: "the 'hour' or 'minute' were not informed correctly."
        });
    }
    
    try{
        clockRepository.getAngleFromDb(clock).then(function(result){
            if(result){
                res.status(200).send({
                    angle: result
                });
            }else{
                clockRepository.insertAngleToDb(clock);
                res.status(200).send({
                    angle: clock.calculateAngle()
                });
            }
        });
    }catch(err){
        console.log(err.message);
    }
    
});

module.exports = router;