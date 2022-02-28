const { Client } = require('pg');
const name = '"ColinLeDev/projet_final_nsi"'
// Create a client using the connection information provided on bit.io.
const client = new Client({
    user: 'adam_demo_db_connection',
    host: 'db.bit.io',
    database: 'bitdotio',
    password: 'C1GL_Z9Qthisisfake6XghrkhcW',
    port: 5432,
});
client.connect();

client.query('SELECT * FROM '+name+'."group";', (err, res) => {
    console.table(res.rows); // you could also just console.log, but console.table is neat :)
});