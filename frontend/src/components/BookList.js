import React from 'react'
import { Alert, ListGroup, ProgressBar } from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'
import { Link } from 'react-router-dom'

const BookList = () => {

    const { loading, error, data } = useQuery(getBooksQuery)

    return (
        <>
            <h2>Books</h2>
            { error ? 
                <Alert variant='danger'>{error}</Alert>
            :
                loading ? 
                    <ProgressBar className='my-3' animated now={100} />
                :
                    <ListGroup className='my-3'>
                        {data.books && data.books.map(book => (
                            <Link 
                                to={`/book/${book.id}`}
                                className='list-group-item text-white my-1'
                                key={book.id}
                                style={{ textDecoration: 'none' }}
                            >
                                {book.name}
                            </Link>
                        ))}
                    </ListGroup>
            }
        </>
    )
}

export default BookList
