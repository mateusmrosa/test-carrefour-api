const connection = require('../database/Connection')

const getData = async (username) => {
    try {
        const query = `SELECT * FROM authentication WHERE username = ?`;
        const result = await connection.execute(query, [username]);
        return result[0]
    } catch (e) {
        console.log(e)
        return { message: "Error", Erro: e }
    }
}

module.exports = { getData }