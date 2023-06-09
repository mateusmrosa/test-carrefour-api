const express = require('express')
const transactionController = require('./controllers/TransactionsController')
const authenticationController = require('./controllers/AuthenticationController')
const middleware = require('../src/middleware/Middleware')
require('../../backend/src/controllers/AuthenticationController')
const router = express.Router()

router.post('/transaction', middleware.verifyJWT, transactionController.addTransaction)
router.get('/balanceDaily', middleware.verifyJWT, transactionController.getBalance)
router.post('/authentication', authenticationController.authentication)

module.exports = router