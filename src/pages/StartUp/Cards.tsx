import { Col } from 'react-bootstrap';
import CustomButton from '../../common/Buttons/CustomButton';

const Cards = (props: any) => {
    return (
        <>
            <Col lg={4} md={6} sm={6}>
                <div className="startup-card-box">
                    <span><img src={props?.image} className='img-fluid' /></span>
                    <h2>{props?.title}</h2>
                    <p>{props?.description}</p>
                    <CustomButton buttonTitle="View Details" />
                </div>
            </Col>
        </>

    )
}

export default Cards;