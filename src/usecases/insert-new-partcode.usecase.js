const connectToDatabaseMysql = require("../database/connector-mysql.js");
const { insertPartcode } = require("../sql/sql.lib");
const validPartCode = require("../utils/valid-partcode");
/**
 * 
 * @param {string} partcode 
 */
async function insertNewPartcode(partcode){
    if(!partcode) throw new Error('nao foi informado o partcode')
    if(!( await validPartCode(partcode))) throw new Error('partcode invalido')
    const connection = await connectToDatabaseMysql();
    return await connection.query(insertPartcode, [partcode])
}

module.exports = insertNewPartcode