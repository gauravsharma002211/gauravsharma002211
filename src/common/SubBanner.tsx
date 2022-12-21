import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import note from '../assets/images/note.svg';

const SubBanner = (props: any) => {
    return (
        <>
            <section className="coverage-section">
                <Container>
                    <div className="coverage-img" style={{background: `url(${props?.bgImage})`}}>
                        {(props?.whiteTitle || props?.orangeTitle) && props?.whiteTitle.includes("<br/>") ? <h2 className="title-wrp"><div dangerouslySetInnerHTML={{__html: props?.whiteTitle}}></div> <span>{props?.orangeTitle}</span></h2> : <h2 className="title-wrp">{props?.whiteTitle} <span>{props?.orangeTitle}</span></h2>}
                        {props?.content && <div dangerouslySetInnerHTML={{__html: props?.content}} />}
                        {props?.buttonTitle && props?.image && <Button className="started-btn">{props?.buttonTitle} <img className="mx-2 me-0" src={props?.image} /></Button>}
                    </div>

                </Container>
            </section>
        </>

    )
}

export default SubBanner;