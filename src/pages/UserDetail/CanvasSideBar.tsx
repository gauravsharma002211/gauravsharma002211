import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import CustomButton from "../../common/Buttons/CustomButton";

const CanvasSideBar = (props: any) => {
    return (
        <>
            <Offcanvas show={props?.show} onHide={props?.onHide} placement={"end"}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="top-wrp">
                        <div className="pi-package-img">
                            <img src={props?.image} />
                        </div>
                        <Offcanvas.Title>Startup Package</Offcanvas.Title>
                        <p>The all-in-one package custom designed to protect Startups. From executive decisions, and product errors, to hackers stealing PII, workplace harassment, and discrimination lawsuits.</p>
                        <CustomButton buttonTitle='Add Coverage' />
                    </div>
                    <div className="desc-mid">
                        <h3>What is Startup Package Insurance?</h3>
                        <p>COVRZY's Startup Package combines Directors and Officers (D&O), Employment Practices Liability (EPL), Fiduciary, and Technology Errors and Omissions / Cyber Liability insurance in one package. The policy covers claims of breach of fiduciary duty, claims made by employees against the company, and damages arising from technology services provided.</p>
                        <br />
                        <strong>THIS INCLUDES COVERAGE FOR:</strong>
                        <ul>
                            <li><img src={props?.checkImage} /> Breach of contract</li>
                            <li><img src={props?.checkImage} /> Misuses of company funds</li>
                            <li><img src={props?.checkImage} /> Harassment and discrimination</li>
                        </ul>
                        <br />
                        <h3>Who Needs Startup Package Insurance?</h3>
                        <p>The Startup Package is for for companies that have raised venture funding. Without this type of protection, starting a company, or serving on its board, would entail significantly more personal financial risk than it already does.</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CanvasSideBar;