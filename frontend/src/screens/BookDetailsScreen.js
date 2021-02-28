import { useQuery } from '@apollo/client'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
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
            {loading ? 
                <ProgressBar animated now={100} />
            :
                <>
                    
                </>
            }
        </div>
    )
}

export default BookDetailsScreen
