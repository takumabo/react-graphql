
// need to write 'require' as node.js. not 'import'  
const dotenv = require('dotenv')
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

// set up connect database config
dotenv.config()
const DB_USER = process.env.MONGO_DB_USER
const DB_PASSWORD = process.env.MONGO_DB_PASSWORD
const DB_NAME = process.env.MONGO_DB_NAME

const app = express()

// setup cors
app.use(cors())
const REACT_APP_FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL

mongoose.set('strictQuery', false)
const connectionKey = `${DB_USER}:${DB_PASSWORD}`
mongoose.connect(`mongodb+srv://${connectionKey}@cluster0.ippugzt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
mongoose.connection.once('open', () => {
    console.log("connection")
})
app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
        // cors: cors({ origin: [REACT_APP_FRONTEND_URL] }),
    }))

// normal access
app.get('/', (req: any, res: any) => {
    res.send('Hello World');
});

const PORT = 4000;
app.listen(4000, () => {
    console.log(`Running on http://localhost:${PORT}`);
});