const pg = require('pg');

async function createTable(){
    
    const db = new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'rsoliveira',
        port: 5432
    });

    await db.connect();

    await db.query(`CREATE TABLE angle_requests(
        req_id serial PRIMARY KEY NOT NULL,
        req_hour integer NOT NULL,
        req_minute integer,
        req_angle real,
        req_date date
    )`);

    await db.end();

    console.log("Tabela criada.");
}

createTable();