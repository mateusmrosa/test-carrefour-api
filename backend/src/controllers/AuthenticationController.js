const AuthenticationEntitie = require('../entities/AuthenticationEntitie')
const AuthenticationModel = require('../models/AuthenticationModel')
require('dotenv').config();
const util = require('../util/Util')
const helper = require('../helpers/helpers')


const authentication = async (req, res) => {
    try {
        const { username, password } = req.body
        const authentication = new AuthenticationEntitie(username, password)
        const result = await AuthenticationModel.getData(authentication.username)
        if (result[0] != undefined) {
            const id = result[0].id
            const pass = authentication.password
            await helper.bcryptCompare(pass, result, res)
            await helper.authenticate(authentication, result, res)
            const token = await helper.createToken(id)
            return res.status(200).json({ auth: true, token })
        } else
            return util.invalidCredentials(res);
    } catch (e) {
        console.log(e)
        return { message: "Error", Erro: e }
    }
}

module.exports = { authentication }