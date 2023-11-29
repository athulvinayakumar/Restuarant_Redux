import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/resturantSlice';

function Header() {
const dispatch = useDispatch()
    return (
        <>
            <Navbar bg="" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className='d-flex p-3'>
                        <img
                            alt=""
                            src="https://www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        <h5 className='mt-2 ms-2'><span className='text-warning'> Food </span >Circle</h5>
                    </Navbar.Brand>
                    <input type="text" onChange={(e)=>dispatch(search(e.target.value))} placeholder='Search by neighbourhood' className='form-control w-25' />
                </Container>
            </Navbar>
        </>
    )
}

export default Header