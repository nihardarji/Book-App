import React from 'react'
import { Alert, ListGroup, ProgressBar } from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import AddBook from './AddBook'
import { getBooksQuery } from '../queries/queries'

const BookList = () => {

    const { loading, error, data } = useQuery(getBooksQuery)

    return (
        <>
            { error ? 
                <Alert variant='danger'>{error}</Alert>
            :
                loading ? 
                    <ProgressBar className='my-3' animated now={100} />
                :
                    <>
                        <ListGroup className='my-3'>
                            {data.books && data.books.map(book => (
                                <ListGroup.Item key={book.id}>{book.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                        <AddBook />
                    </>
            }
        </>
    )
}

export default BookList
