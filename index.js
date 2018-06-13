const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const cors = require('cors')
const expressPlayground = require('graphql-playground-middleware-express').default

const FullSchema = require('gql-tumblr')({
    consumer_key: "consumer_key",
    consumer_secret: "consumer_secret",
}).Schemas.Full({
    token: "token",
    token_secret: "token_secret",
});
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: FullSchema,
    graphiql: true
}));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))


app.listen(4000); 
