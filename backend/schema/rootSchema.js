import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { BookType } from './bookSchema.js'

// Dummy Data
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: "1" },
    { name: 'The Final Empire', genre: 'Fantasy', id: "2" },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: "3" }
]

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                // Code to get data from db / other source
                return books.find(book => book.id === args.id)
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: RootQuery
})

export {
    schema
}