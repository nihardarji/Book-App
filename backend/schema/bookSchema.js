import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'
import { AuthorType } from './authorSchema.js'
import { authors } from './rootSchema.js'

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return authors.find(author => author.id === parent.authorId)
            }
        }
    })
})

export {
    BookType
}