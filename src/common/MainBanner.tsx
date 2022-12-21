import { Button, Col, Container, Row } from 'react-bootstrap';
import CustomButton from './Buttons/CustomButton';
const MainBanner = (props: any) => {
    return (
        <>
            <section className="hero-banner">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className="hero-info">
                                {props?.starMessage && <span><i className="fa fa-star" aria-hidden="true"></i> {props?.starMessage}</span>}
                                {props?.mainTitle && <h1>{props?.mainTitle}</h1>}
                                {props?.subTitle && <h1>{props?.subTitle}</h1>}
                                {props?.content && <div dangerouslySetInnerHTML={{__html: props?.content}}></div>}
                                <CustomButton buttonTitle="GET A QUOTE" />
                            </div>
                        </Col>
                        <Col md={6}>
                            {props?.image && <img src={props?.image} className="img-fluid" />}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default MainBanner;