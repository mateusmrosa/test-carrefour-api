const transactionModel = require('../models/TransactionModel')
const transactionEntitie = require('../entities/TransactionEntitie')
const util = require('../util/Util')


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

const getBalance = async (req, res) => {
    try {
        const results = await transactionModel.getBalance()

        const dailySummary = results.map(r => ({
            date: util.formatDate(r.date),
            credits: r.credits,
            debits: "-" + r.debits,
            daily_balance: r.daily_balance
        }))
        return res.status(200).json({ dailySummary })


        // return res.status(404).json({ message: 'Não existe movimentação' })
    } catch (e) {
        console.error(e);
        res.status(500).json({ 'message': 'Error' });
    }
}

module.exports = { addTransaction, getBalance }