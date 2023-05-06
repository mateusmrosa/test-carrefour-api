const connection = require('../database/Connection')

const getData = async () => {
    try {
        const query = `SELECT * FROM authentication`;
        const result = await connection.execute(query);
        return result[0]
    } catch (e) {
        console.log(e)
        return { message: "Error", Erro: e }
    }
}

module.exports = { getData }