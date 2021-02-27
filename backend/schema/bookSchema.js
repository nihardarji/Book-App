import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql"

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

export {
    BookType
}