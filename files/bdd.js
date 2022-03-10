
const { Client } = require(['scripts/sql.js']);


const name = '"ColinLeDev/projet_final_nsi"'
// Create a client using the connection information provided on bit.io.
const client = new Client({
  user: 'ColinLeDev_demo_db_connection',
  host: 'db.bit.io',
  database: 'bitdotio',
  password: '34xAU_nLjvgtzAN8uSKAzXbXZS76u',
  port: 5432,
});
client.connect();

client.query('SELECT * FROM '+name+'."group";', (err, res) => {
    console.table(res.rows);
});