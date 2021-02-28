import { gql } from "@apollo/client"

export const getBooksQuery = gql`
{
    books{
        id
        name
        genre
        author{
            name
            age
        }
    }
}
`

export const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`

export const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name:$name, genre:$genre, authorId:$authorId){
            name
            id
        }
    }
`