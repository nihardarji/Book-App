import React from 'react'
import { Alert, ListGroup, ProgressBar } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'

const BookList = () => {

    const { loading, error, data } = useQuery(GET_BOOKS)

    return (
        <>
            { error ? 
                <Alert variant='danger'>{error}</Alert>
            :
                loading ? 
                    <ProgressBar className='my-3' animated now={100} />
                :
                    <ListGroup className='my-3'>
                        {data.books && data.books.map(book => (
                            <ListGroup.Item key={book.id}>{book.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
            }
        </>
    )
}

const GET_BOOKS = gql`
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

export default BookList
