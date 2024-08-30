const connectToDatabaseLogix = require("../database/connector-logix");
const connectToDatabaseMysql = require("../database/connector-mysql");
const { setIsolation, consult_counter } = require("../sql/sql.lib");
const getRelatablePartcode = require("./get-relatable-partcode.usecase");

async function GetCabsCounterNow(){
    try {
        const connection = await connectToDatabaseLogix();
        await connection.query(setIsolation)
        const partcodes = await getRelatablePartcode()
        const partcodesString = partcodes
            .map(partcode => partcode.partcode)
            .join("','");
        const result = await connection.query(consult_counter("'".concat(partcodesString, "'")));
        if (result.length > 0) {
          const currentCout = result[0].total_counter + +process.env.CURRENTCOUNT
          return currentCout
        } else {
          res.status(404).send({ message: 'No data found' });
        }
      } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send({ error: 'Failed to fetch data' });
      }
}

module.exports = GetCabsCounterNow