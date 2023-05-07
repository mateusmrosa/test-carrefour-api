const jwt = require('jsonwebtoken')
require('dotenv').config();


const verifyJWT = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    console.log(token)
    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err)
                return res.status(400).json({ auth: false, error: err.message })
            else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.status(401).send({
            auth: false,
            msg: 'Não autorizado!'
        })
    }
}

module.exports = { verifyJWT }

