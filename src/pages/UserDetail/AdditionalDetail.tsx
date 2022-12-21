import { Col, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import CustomButton from "../../common/Buttons/CustomButton";
import OrangeButton from "../../common/Buttons/OrangeButton";
import CustomInput from "../../common/CustomInput";
import CustomLabel from "../../common/CustomLabel";

const AdditionalDetail=()=>{
    return (
        <>
         <div className="pi-step-form" id="pi-step-four">
                <h2 className="pi-content-title">Additional Details</h2>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="No. of Employees" />
                            <CustomInput type="text" name="employees" placeholder="Enter No. of employees" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Are you purchasing business insurance for the first time?" />
                            <div className="pi-radio-wrp">
                                <Form.Check type="radio" label="Yes" name="time" aria-label="radio 1" checked />
                                <Form.Check type="radio" label="No" name="time" aria-label="radio 1" />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Policy Name" />
                            <CustomInput type="text" name="name" placeholder="Enter Policy Name" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Policy End Date" />
                            <CustomInput type="date" name="name" placeholder="Enter Policy end date " />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Coverage Amount" />
                            <CustomInput type="text" name="name" placeholder="Enter Coverage amount" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Insurer Name" />
                            <CustomInput type="text" name="name" placeholder="Enter Insurer Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="pi-step-btn">
                    <CustomButton buttonTitle='Preview' />
                    <OrangeButton buttonName='Save and Continue' />
                </div>
            </div>
        </>
    )
}
export default AdditionalDetail;