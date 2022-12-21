import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import CustomButton from "../../common/Buttons/CustomButton";
import CustomInput from "../../common/CustomInput";
import CustomLabel from "../../common/CustomLabel";
import Footer from "../../common/InfoLayouts/Footer";
import Header from "../../common/InfoLayouts/Header";
import Sidebar from "../../common/InfoLayouts/Sidebar";
import OrangeButton from "../../common/Buttons/OrangeButton";

const PersonalDetail = () => {
    return (
        <>
            <div className="pi-step-form" id="pi-step-one">
                <h2 className="pi-content-title">Personal Details</h2>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="First Name" />
                            <CustomInput type="text" name="fname" placeholder="Enter Your First Name" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Last Name" />
                            <CustomInput type="text" name="name" placeholder="Enter Your Last Name" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Email *" />
                            <CustomInput type="text" name="name" placeholder="Enter Your Email Address" />
                            <span className="pi-get-otp-btn">Get OTP</span>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="OTP" />
                            <CustomInput type="text" name="name" placeholder="Enter Your OTP" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Designation" />
                            <CustomInput type="text" name="name" placeholder="Enter Your Designation" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Password" />
                            <CustomInput type="password" name="name" placeholder="Enter Your password" />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="pi-step-btn">
                    <CustomButton buttonTitle='Back' />
                    <OrangeButton buttonName='Save and Continue' />
                </div>
            </div>
        </>
    )
}

export default PersonalDetail;