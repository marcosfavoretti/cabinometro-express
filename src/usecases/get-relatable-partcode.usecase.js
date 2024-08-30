const connectToDatabaseMysql = require("../database/connector-mysql.js");
const { getPartcode } = require("../sql/sql.lib.js");
/**
 * 
 * @returns {Array<{ID: number, partcode: string}>}
 */
async function getRelatablePartcode() {
    try {
        const connection = await connectToDatabaseMysql();
        const [result] = await connection.query(getPartcode);
        return result;
    } catch (error) {
        console.error("Erro ao executar a consulta:", error);
        throw error;
    }
}

module.exports = getRelatablePartcode;
