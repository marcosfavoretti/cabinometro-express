const odbc = require('odbc');

const connectionString = `DSN=${process.env.DATABASEDSN}`;

let connection;

async function connectToDatabase() {
  if (!connection) {
    try {
      connection = await odbc.connect(connectionString);
      console.log('Database connected');
    } catch (error) {
      console.error('Failed to connect to database', error);
      throw error;
    }
  }
  return connection;
}

module.exports = connectToDatabase;
