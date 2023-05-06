const express = require('express')
const transactionController = require('./controllers/TransactionsController')
const authenticationController = require('./controllers/AuthenticationController')

const router = express.Router()

router.post('/transaction', transactionController.addTransaction)
router.get('/balanceDay', transactionController.getBalance)
router.post('/authentication', authenticationController.authentication)

module.exports = router