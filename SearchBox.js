import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate,useLocation } from 'react-router-dom'
import './edit.css'

function SearchBox() {
    const [keyword, setKeyword] = useState('')
    let cur = useLocation().pathname
    let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?keyword=${keyword}`)
        } else {
            navigate(cur)
        }
    }
    return (
        <Form onSubmit={submitHandler} className='f-ed' inline="true">
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} className='mr-sm-2 ml-sm-5'/>

            <Button type='submit' variant='outline-success' className='p-2'>
                Submit
            </Button>
        </Form>
    )
}

export default SearchBox