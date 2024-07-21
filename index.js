const express = require('node-adodb');
const odbc = require('odbc');

const app = express();
const port = 3001;

const connectionString = 'Driver={Microsoft Access Driver (.mdb, .accdb)};DBQ="C:\Users\storm\Documents\Capstone Project\Actual Project\FoxInk Database.accdb";';

app.get('/', async (req, res) => {
  try {
    const connection = await odbc.connect(connectionString);
    const result = await connection.query('SELECT * FROM Customer');
    res.json(result);
    await connection.close();
} catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to the database.');
}
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:3001");
});