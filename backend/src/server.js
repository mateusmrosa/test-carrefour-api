const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log(`serviço rendando na porta: ${port}`)
})