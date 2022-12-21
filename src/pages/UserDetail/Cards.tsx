import { Col } from "react-bootstrap";
import CustomButton from "../../common/Buttons/CustomButton";
import LinkButton from "../../common/Buttons/LinkButton";


const Cards = (props: any) => {
    return (
        <>
            <Col lg={6}>
                <div className="pi-package-box">
                    <div className="pi-package-img">
                        <img className="blue-img" src={props?.image} />
                        <img className="orange-img" src={props?.hoverImage} />
                    </div>
                    <div className="pi-package-desc">
                        <h3>{props?.title}</h3>
                        <p>{props?.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <CustomButton buttonTitle={props?.buttonTitle} onClick={props?.onClick} />
                            <LinkButton buttonTitle='Learn More' onLinkClick={props?.onLinkClick} />
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}
export default Cards;