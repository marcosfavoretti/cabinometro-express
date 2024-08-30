const getRelatablePartcode = require('../usecases/get-relatable-partcode.usecase')
const insertNewPartcode = require('../usecases/insert-new-partcode.usecase')
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getRelatablePartcodesController(req, res){
    try{
        const values = await getRelatablePartcode()
        res.status(200).send(values)
    }
    catch(err){
        res.status(400).send(err)
    }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function insertRelatablePartcodeController(req, res) {
    try{
        await insertNewPartcode(req.body.partcode)
        res.status(200).send('ok')
    }
    catch(err){
        res.status(400).send(err.message)
    }
}

module.exports = {
    insertRelatablePartcodeController,
    getRelatablePartcodesController,
    insertRelatablePartcodeController
}