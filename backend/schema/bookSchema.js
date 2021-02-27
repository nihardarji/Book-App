import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'
import { AuthorType } from './authorSchema.js'
import Author from '../models/authorModel.js'

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findById(parent.authorId)
            }
        }
    })
})

export {
    BookType
}