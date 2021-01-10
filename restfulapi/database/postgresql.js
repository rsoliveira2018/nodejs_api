const pg = require('pg');

class PostgreSQLConnection{

    constructor(){}

    static GetNewConnection(){

        const client = new pg.Client({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: 'rsoliveira',
            port: 5432
        });

        return client;
    }

}

module.exports = PostgreSQLConnection;