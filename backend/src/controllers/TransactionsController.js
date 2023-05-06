const transactionModel = require('../models/TransactionModel')
const transactionEntitie = require('../entities/TransactionEntitie')
const util = require('../util/Util')

// async function getBalance(req, res) {


// }

const addTransaction = async (req, res) => {

    try {
        const { date, value, description, type } = req.body;

        const dateFormat = util.formatDate(date)

        const transaction = new transactionEntitie(date, value, description, type)

        const result = await transactionModel.insert(transaction)

        if (result[0].affectedRows) {
            return res.status(201).json({
                transaction: transaction,
                affectedRows: result[0].affectedRows
            })
        } else {
            return res.status(500).json({
                message: 'Error'
            })
        }

    } catch (e) {
        console.error(e);
        res.status(500).json({ 'message': 'Error' });
    }
}

const getBalance = async(req, res) => {
    try {
        const result = await transactionModel.getBalance()
        return res.status(200).json({ result })
    } catch (e) {
        console.error(e);
        res.status(500).json({ 'message': 'Error' });
    }
}

module.exports = { addTransaction, getBalance }