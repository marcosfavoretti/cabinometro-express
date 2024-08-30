const { consult_counter, setIsolation } = require('../sql/sql.lib');
const GetCabsCounterNow = require('../usecases/get-cabs-counter-now.usecase');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function consultCabsCounterController(req, res) {
  try{
    const value = await GetCabsCounterNow()
    res.status(200).send({current_counter: value});
  } 
  catch(err){
    res.status(500).send('no data found')
  }
}

module.exports = consultCabsCounterController;