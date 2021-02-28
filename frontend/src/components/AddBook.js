import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Button, Form } from 'react-bootstrap'
import { addBookMutation, getAuthorsQuery, getBooksQuery } from '../queries/queries'

const AddBook = () => {
    const [bookName, setBookName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const { loading, error, data } = useQuery(getAuthorsQuery)
    const [addBook] = useMutation(addBookMutation, {
        variables: {
            name: bookName,
            genre,
            authorId
        },
        refetchQueries: [{ query: getBooksQuery }]
    })


    const getAuthors = () => {
        if(loading){
            return <option disabled>Loading Authors...</option>
        } else if(error) {
            console.log(error)
        } else {
            return data.authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
            ))
        }
    }

    const submitHandler = e => {
        e.preventDefault()
        addBook()
    }

    return (
        <Form className='my-2' onSubmit={submitHandler}>
            <h2>Add Book</h2>
            <Form.Group controlId="bookname">
                <Form.Label>Book Name</Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    placeholder="Enter book name"
                    value={bookName}
                    onChange={e => setBookName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="genre">
                <Form.Label>Genre</Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    placeholder="Enter genre"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="select-author">
                <Form.Label>Select Author</Form.Label>
                <Form.Control as="select" value={authorId} onChange={e => setAuthorId(e.target.value)} required>
                    <option value=''>Select Author</option>
                    {getAuthors()}
                </Form.Control>
            </Form.Group>
            <Button type='submit' variant='outline-info'>Add</Button>
        </Form>
    )
}

export default AddBook
