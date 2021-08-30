import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Chercher un maillot...'
                className='mr-sm-2 ml-sm-5 rounded'
            >

            </Form.Control>
            <Button type='submit' className='search bg-transparent'>
                <i className="fas fa-search fa-2x"></i>
            </Button>
        </Form>
    )
}

export default Search