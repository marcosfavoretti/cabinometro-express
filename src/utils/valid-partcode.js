
const connectToDatabaseMysql = require("../database/connector-mysql")
const { selectOnePartcode } = require("../sql/sql.lib")
/**
 * 
 * @param {string} partcode
 * @returns {boolean} 
 */
async function validIfAlreadyCreated(partcode) {
    if(!partcode) return false
    const connection = await connectToDatabaseMysql()
    const [result] = await connection.query(selectOnePartcode, [partcode])
    return !result.length
}
/**
 * 
 * @param {string} partcode 
 * @returns {boolean}
 */

async function validPartCode(partcode){
    const value = await validIfAlreadyCreated(partcode)
    return (
        partcode.length >= 12
        &&
        partcode.split('-').length == 3
        &&
        value
    ) //todo item tem que ter 2x'-'
}


module.exports = validPartCode