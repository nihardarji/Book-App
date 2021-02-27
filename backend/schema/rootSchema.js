import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql'
import { AuthorType } from './authorSchema.js'
import { BookType } from './bookSchema.js'

// Dummy Data
export const books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1'},
  {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2'},
  {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'},
  {name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2'},
  {name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3'},
  {name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3'}
]

export const authors =  [
    {name: 'Patrick Rothfuss', age: 44, id:'1'},
    {name: 'Brandon Sanderson', age: 42, id:'2'},
    {name: 'Terry Pratchett', age: 66, id:'3'},
]

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // Code to get data from db / other source
                return books.find(book => book.id === args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return authors.find(author => author.id === args.id)
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