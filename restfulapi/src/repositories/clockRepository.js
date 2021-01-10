const pg = require('pg');

class ClockRepository{
    
    constructor() { }

    async getAngleFromDb(clock){
        const db = new pg.Client({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: 'rsoliveira',
            port: 5432
        });

        await db.connect();
        const result = await db.query("SELECT * FROM angle_requests WHERE req_hour = $1 AND req_minute = $2;", [clock.hour, clock.minute]);
        await db.end();

        if(result.rowCount > 0){
            return result.rows[0].req_angle;
        } else {
            return false;
        }  
    }

    async insertAngleToDb(clock){

        const db = new pg.Client({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: 'rsoliveira',
            port: 5432
        });
    
        const today = new Date();
        const insertDate = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
    
        const insertQuery = "INSERT INTO angle_requests (req_hour, req_minute, req_angle, req_date) VALUES ($1, $2, $3, $4)";
    
        await db.connect();
        await db.query(insertQuery, [clock.hour, clock.minute, clock.angle, insertDate]);
    
        await db.end();
    }

}

module.exports = ClockRepository;