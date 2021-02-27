import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import { BookType } from './bookSchema.js'
import Book from '../models/bookModel.js'

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({ authorId: parent.id })
            }
        }
    })
})

export {
    AuthorType
}