const connection = require('../database/Connection')

const insert = async (transaction) => {
    try {
        const query = `INSERT INTO transactions (date, value, description, type) VALUES (?,?,?,?)`;
        const result = await connection.execute(query, [
            transaction.date,
            transaction.value,
            transaction.description,
            transaction.type
        ]);
        return result
    } catch (e) {
        console.log(e)
        return { message: "Error", Erro: e }
    }
}

const getBalance = async () => {
    try {
        const query = `SELECT date,
                       SUM(CASE WHEN type = 'credit' THEN value ELSE 0 END) AS credits,
                       SUM(CASE WHEN type = 'debit'  THEN value ELSE 0 END) AS debits,
                       SUM(CASE WHEN type = 'credit' THEN value ELSE 0 END) 
                     - SUM(CASE WHEN type = 'debit'  THEN value ELSE 0 END) AS daily_balance
                       FROM transactions
                       GROUP BY date
                       ORDER BY date ASC;`;
        const result = await connection.execute(query);
        return result[0]
    } catch (e) {
        console.log(e)
        return { message: "Error", Erro: e }
    }
}

module.exports = { insert, getBalance }