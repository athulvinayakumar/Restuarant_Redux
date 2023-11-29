import React, { useEffect, useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestuarant } from '../redux/resturantSlice';


function ResturantView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const {id} = useParams()
    console.log(id);

    const allRestaurant = useSelector((state) => state.resturantSlice.allRestaurant)
    console.log(allRestaurant);

    const selectedResturant = allRestaurant.find((item) => item.id==id);
    console.log(selectedResturant);


    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(fetchRestuarant())
    }, [])


    return (
        <>
            <Row className='p-3'>
                <Col md={1}></Col>
                <Col md={3}>
                    <Image  height={'450px'} className='rounded' src={selectedResturant?.photograph} alt="" fluid />
                </Col>
                <Col md={7}>
                    <hr className='bg-white'></hr>
                    <h4 className='text-center'><b><span className='text-warning'>RESTAURANT</span >&nbsp; DETAILS</b></h4>
                    <hr></hr>
                    <ListGroup className='mt-4'>
                        <ListGroup.Item><h4 className='text-center p-4'>{selectedResturant?.name}</h4></ListGroup.Item>
                        <ListGroup.Item>Neighborhood : {selectedResturant?.neighborhood}</ListGroup.Item>
                        <ListGroup.Item>Cuisine Type : {selectedResturant?.cuisine_type} </ListGroup.Item>
                        <ListGroup.Item>Address : {selectedResturant?.Address}</ListGroup.Item>

                        <ListGroup.Item className='text-center p-4'>
                            <Button onClick={handleShow} variant="warning">
                                Operating Hours
                            </Button>

                            <Modal
                                show={show}
                                onHide={handleClose}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ListGroup>
                                        <ListGroup.Item>Monday : {selectedResturant?.operating_hours.Monday}</ListGroup.Item>
                                        <ListGroup.Item>Tuesday : {selectedResturant?.operating_hours.Tuesday} </ListGroup.Item>
                                        <ListGroup.Item>Wednesday : {selectedResturant?.operating_hours.Wednesday}</ListGroup.Item>
                                        <ListGroup.Item>Thursday :{selectedResturant?.operating_hours.Thursday}</ListGroup.Item>
                                        <ListGroup.Item>Friday : {selectedResturant?.operating_hours.Friday}</ListGroup.Item>
                                        <ListGroup.Item>Saturday : {selectedResturant?.operating_hours.Saturday}</ListGroup.Item>
                                        <ListGroup.Item>Sunday : {selectedResturant?.operating_hours.Sunday}</ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                            </Modal>
                            {/* <Button variant="warning ms-2">
                                Click here to see the Reviews.
                            </Button> */}
                            <RestReview reviews ={selectedResturant?.reviews}/>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={7}>

                </Col>
                <Col md={1}></Col>
            </Row>
        </>
    )
}

export default ResturantView