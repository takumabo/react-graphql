
// need to write express as node.js. not import  
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

// const graphqlHTTP = expressGraphql()
const app = express()

app.use('/graphql', graphqlHTTP({

}))

// normal access
app.get('/', (req: any, res: any) => {
    res.send('Hello World');
});

const PORT = 4000;
app.listen(4000, () => {
    console.log(`Running on http://localhost:${PORT}`);
});