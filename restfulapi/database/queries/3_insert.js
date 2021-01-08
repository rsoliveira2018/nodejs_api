const pg = require('pg');

async function insertAngleToDb(hour, minute, angle){

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
    await db.query(insertQuery, [hour, minute, angle, insertDate]);

    await db.end();
}

module.exports = insertAngleToDb;