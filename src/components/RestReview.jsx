import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function RestReview({ reviews }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(!open)} className='btn btn-warning ms-3'>
                click Here to See the Reviews
            </button>

            <Collapse in={open}>
                <div className='my-2' id="example-collapse-text">
                    {
                        reviews?.map((items) =>
                            <>
                                <hr />
                                <div className='mt-5'>
                                    <h6>Name: {items.name}</h6>
                                    <p>Rating: {items.rating}</p>
                                    <p>comments: {items.comments}</p>
                                </div>

                            </>
                        )
                    }


                </div>
            </Collapse>
        </>
    )
}

export default RestReview