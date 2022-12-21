import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap';

const CustomCards = (props: any) => {
    return (
        <>
            <Col md={4} sm={6}>
                <div className="article-box">
                    <img src={props?.image} className='img-fluid' />
                    <h3>{props?.content}</h3>
                    <div className="arrowbtn">
                        <Button><img src={props?.buttonImage} /></Button>
                    </div>
                </div>
            </Col>
        </>

    )
}

export default CustomCards;