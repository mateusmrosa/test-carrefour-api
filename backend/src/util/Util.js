const moment = require("moment");

const formatDate = (param) => {
    let dateFormat = moment(param).format("DD-MM-YYYY");
    return dateFormat
}

function invalidCredentials(res) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
}

module.exports = { formatDate, invalidCredentials }