const express = require('express')
const transactionController = require('./controllers/TransactionsController')

const router = express.Router()

router.post('/transaction', transactionController.addTransaction)
router.get('/balanceDay', transactionController.getBalance)

module.exports = router