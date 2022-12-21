import { Col } from 'react-bootstrap';
import CustomButton from '../../common/Buttons/CustomButton';
const Cards = (props: any) => {
    return (
        <>
            <Col lg={3} md={6}>
                <div className="packages-box">
                    <span>
                        {props?.image && <img src={props?.image} className="img-fluid" />}
                    </span>
                    <h3>{props?.title}</h3>
                    <p>{props?.content}</p>
                    <CustomButton buttonTitle={props?.buttonTitle} />
                </div>
            </Col>
        </>

    )
}

export default Cards;