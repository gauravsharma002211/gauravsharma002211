import { Col, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import CustomButton from "../../common/Buttons/CustomButton";
import OrangeButton from "../../common/Buttons/OrangeButton";
import CustomInput from "../../common/CustomInput";
import CustomLabel from "../../common/CustomLabel";

const Review=()=>{
    return (
        <>
        <div className="pi-step-form" id="pi-step-five">
                <h2 className="pi-content-title">Review & Submit</h2>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Business name" />
                            <CustomInput type="text" name="fname" placeholder="AaronAgro" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Name" />
                            <CustomInput type="text" name="name" placeholder="Name" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Company Name" />
                            <CustomInput type="text" name="name" placeholder="Company Name" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Email" />
                            <CustomInput type="text" name="name" placeholder="Email" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Designation" />
                            <CustomInput type="text" name="name" placeholder="Designation" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Mobile" />
                            <CustomInput type="text" name="name" placeholder="Mobile" disabled />
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Company type" />
                            <CustomInput type="text" name="name" placeholder="Company type" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Sub category " />
                            <CustomInput type="text" name="name" placeholder="Sub category" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Turnover" />
                            <CustomInput type="text" name="name" placeholder="Turnover" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Funding Details" />
                            <CustomInput type="text" name="name" placeholder="Funding Details" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="No. of employees" />
                            <CustomInput type="text" name="name" placeholder="No. of employees" disabled />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Purchasing liability insurance for first time" />
                            <CustomInput type="text" name="name" placeholder="Yes"  disabled />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="pi-step-btn">
                    <CustomButton buttonTitle='Back' />
                    <OrangeButton buttonName='Submit' />
                </div>
            </div>
        </>
    )
}
export default Review;