import React, { useEffect } from 'react'
import RestCArd from '../components/RestCArd'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarant } from '../redux/resturantSlice'



function Home() {

    // accessing the state
    const allRestaurant = useSelector((state) => state.resturantSlice.allRestaurant)
    console.log(allRestaurant);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRestuarant())
    }, [])
    return (
        <>
            <Row>
                {
                allRestaurant?.length>0?
                allRestaurant.map((restaurant)=>(
                <Col className='px-5 py-3' sm={6} md={4}>
                    <RestCArd restaurant = {restaurant}/>
                </Col>
              )):
                <h3>Nothing to display</h3>
                }
            </Row>
        </>
    )
}

export default Home