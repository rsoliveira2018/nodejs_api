const pg = require('pg');

async function getAngleFromDb(hour, minute){

    const db = new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'rsoliveira',
        port: 5432
    });

    if(minute == null) minute = 0;

    await db.connect();
    const result = await db.query("SELECT * FROM angle_requests WHERE req_hour = $1 AND req_minute = $2;", [hour, minute]);
    await db.end();

    if(result.rowCount > 0){
        return result.rows[0].req_angle;
    } else {
        return false;
    }    
}

module.exports = getAngleFromDb;