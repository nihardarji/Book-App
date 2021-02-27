import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import { BookType } from './bookSchema.js'
import { books } from './rootSchema.js'

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books.filter(book => book.authorId === parent.id)
            }
        }
    })
})

export {
    AuthorType
}