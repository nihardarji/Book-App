import express from 'express'
import { graphqlHTTP }  from 'express-graphql'
import { schema } from './schema/rootSchema.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import path from 'path'
dotenv.config()

connectDB()

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const __dirname = path.resolve()

// if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
// }

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})