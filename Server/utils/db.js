import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to Db:', err);
      process.exit(1); // Salir del proceso si hay un error al conectar
    }
    console.log('Connection established');
  });
  
  connection.on('error', (err) => {
    console.error('MySQL error:', err);
  });

export default connection;