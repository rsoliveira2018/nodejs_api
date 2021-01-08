const pg = require('pg');

async function dropTable(){

    const db = new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'rsoliveira',
        port: 5432
    });

    await db.connect();
    await db.query('DROP TABLE angle_requests');

    await db.end();

    console.log("Tabela removida.");
}

dropTable();