import express from 'express'
import { graphqlHTTP }  from 'express-graphql'
import { schema } from './schema/rootSchema.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()

connectDB()

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})