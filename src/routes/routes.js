const { Router } = require('express')
const consultCabsCounterController = require('../controller/consult-cabs-counter.controller')
const { getRelatablePartcodesController, insertRelatablePartcodeController } = require('../controller/relatable-partcode.controller')

const routes = Router()
routes.get('/count-cabs', consultCabsCounterController)
routes.post('/partcode', insertRelatablePartcodeController)
routes.get('/partcode', getRelatablePartcodesController)

module.exports = routes