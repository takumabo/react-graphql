
// need to write 'require' as node.js. not 'import'  
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

// normal access
app.get('/', (req: any, res: any) => {
    res.send('Hello World');
});

const PORT = 4000;
app.listen(4000, () => {
    console.log(`Running on http://localhost:${PORT}`);
});