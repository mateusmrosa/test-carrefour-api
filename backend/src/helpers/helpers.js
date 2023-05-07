
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const util = require('../util/Util')

const authenticate = async (authentication, result, res) => {
    if (authentication.username === result[0].username) {
        return true
    } else
        return util.invalidCredentials(res);
}

const bcryptCompare = async (password, result, res) => {
    const isMatch = await bcrypt.compare(password.toString(), result[0].password);
    if (!isMatch)
        return util.invalidCredentials(res);
    else
        return true
}

const createToken = async (id) => {
    const token = jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 3000 });
    return token
}

module.exports = { authenticate, bcryptCompare, createToken }