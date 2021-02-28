import { useQuery } from '@apollo/client'
import React from 'react'
import { Alert, Card, ListGroup, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getBookQUery } from '../queries/queries'

const BookDetailsScreen = ({ match }) => {
    const bookId = match.params.id
    const { loading, error, data } = useQuery(getBookQUery, {
        variables: {
            id: bookId
        }
    })

    return (
        <div className='my-2'>
            <Link to='/' className='btn btn-secondary my-2'>Back</Link>
            <h2>Book Details</h2>
            {error
            ?
                <Alert variant='danger'>{error}</Alert>
            :
                loading ? 
                    <ProgressBar animated now={100} />
                :
                    data.book 
                    ? 
                        <>
                            <Card className='my-4'>
                                <Card.Body>
                                    <h4>Name: {data.book.name}</h4>
                                    <p className='my-2'>Genre: {data.book.genre}</p>
                                    <p className='my-2'>Author Name: {data.book.author.name}</p>
                                </Card.Body>
                            </Card>
                            <Card className='my-4'>
                                <Card.Body>
                                    <h5>All books by author</h5>
                                    <ListGroup variant='flush'>
                                        {data.book.author.books.map(item => (
                                            <Link 
                                                to={`/book/${item.id}`}
                                                className='list-group-item text-white my-1'
                                                key={item.id}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </> 
                    : 
                        <h5 className='text-center my-2'>No Book Found</h5>
            }
        </div>
    )
}

export default BookDetailsScreen
