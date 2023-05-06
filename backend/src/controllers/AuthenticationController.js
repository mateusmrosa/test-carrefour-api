const AuthenticationEntitie = require('../entities/AuthenticationEntitie')
const AuthenticationModel = require('../models/AuthenticationModel')
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken')


const authentication = async (req, res) => {
    try {
        const { username, password } = req.body
        const authentication = new AuthenticationEntitie(username, password)
        const result = await AuthenticationModel.getData()

        const id = result[0].id
        const pass = authentication.password

        bcrypt.compare(pass.toString(), result[0].password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error', msg: err.message })
            } else if (result) {
                const token = jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 3000 })
                return res.status(200).json({
                    auth: true,
                    token
                })
            } else {
                return res.status(401).json({ message: 'login ou senha inválidos' })
            }
        })
    } catch (e) {
        console.log(e)
        return { message: "Error", Erro: e }
    }
}

module.exports = { authentication }