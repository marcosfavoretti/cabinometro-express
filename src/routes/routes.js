const { Router } = require('express')
const consultCabsCounter = require('../usecases/consult-cabs-counter')

const routes = Router()

routes.get('/count-cabs', consultCabsCounter)


module.exports = routes