const { consult_counter, setIsolation } = require('../sql/sql.lib');
const connectToDatabase = require('../database/connector');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function consultCabsCounter(req, res) {
  try {
    const connection = await connectToDatabase();
    await connection.query(setIsolation)
    const result = await connection.query(consult_counter);
    if (result.length > 0) {
      const currentCout = result[0].total_counter + +process.env.CURRENTCOUNT
      res.status(200).send({current_counter: currentCout});
    } else {
      res.status(404).send({ message: 'No data found' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send({ error: 'Failed to fetch data' });
  }
}

module.exports = consultCabsCounter;