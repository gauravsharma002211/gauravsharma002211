import { Col, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import CustomButton from "../../common/Buttons/CustomButton";
import OrangeButton from "../../common/Buttons/OrangeButton";
import CustomInput from "../../common/CustomInput";
import CustomLabel from "../../common/CustomLabel";
import CustomSelect from "../../common/CustomSelect";

const CompanyDetail=()=>{
    return (
        <>
        <div className="pi-step-form" id="pi-step-three">
                <h2 className="pi-content-title">Company Details</h2>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Company type" />
                            <CustomSelect data={['Select Company type', 'Private','Public']}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Sub category" />
                            <CustomSelect data={['Select Sub Industry', 'ABC','XYZ']}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Turnover" />
                            <CustomSelect data={['Select Turnover', 'DEF','MNP']}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <CustomLabel label="Funding Details" />
                            <CustomSelect data={['Select Funding Details', 'PQR','RST']}/>
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
export default CompanyDetail;