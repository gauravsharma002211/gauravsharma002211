import React from "react";
import MainBanner from "./MainBanner";
import startups from '../../assets/images/startups.png';
import cllogo1 from '../../assets/images/cl_logo1.png';
import cllogo2 from '../../assets/images/cl_logo2.png';
import cllogo3 from '../../assets/images/cl_logo3.png';
import cllogo5 from '../../assets/images/cl_logo5.png';
import cllogo6 from '../../assets/images/cl_logo6.png';
import CutWeight from '../../assets/images/CutWeight.svg';
import article from '../../assets/images/article.png';
import ArrowBtn from '../../assets/images/ArrowBtn.png';
import { Button, Col, Container, Row } from "react-bootstrap";

import Cards from "./Cards";
import Images from "../../common/Images";
import CustomCards from "../../common/CustomCards";
import { CustomSlider } from "./Slider";

export const StartUp = () => {

    return (
        <>
            <MainBanner mainTitle="We Protect" subTitle="Startups" content={`<ul>
                            <li>We created the first custom-built policies for venture-backed<br/> 
                            startups. Get covered in under ten minutes.</li>
                        </ul>`} />
            <section className="startup-section text-center">
                <Container>
                    <div className="startups-img">
                        <img src={startups} className='img-fluid' />
                    </div>
                </Container>
            </section>
            <section className="trusted-companies">
                <Container>
                    <div className="trusted-logo">
                        <Images image={cllogo6} />
                        <Images image={cllogo1} />
                        <Images image={cllogo2} />
                        <Images image={cllogo3} />
                        <Images image={cllogo5} />
                    </div>
                </Container>
            </section>
            <section className="rocket-section">
                <Container>
                    <div className="rocket-box">
                        <Row>
                            <Col md={7}>
                                <div className="rocket-info">
                                    <h2>Startup Package</h2>
                                    <p>One application for up to four policies, quick quotes, and instant purchases.</p>
                                    <Button className="link-btn-wrp" variant="link">Learn More</Button>
                                </div>
                            </Col>
                            <Col md={5}>
                                <ul>
                                    <li>Directors & Officers</li>
                                    <li>Employment Practices Liability</li>
                                    <li>Tech Errors and Omissions incl. Cyber</li>
                                    <li>Fiduciary Liability</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="startup-card-section">
                <Container>
                    <Row>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                    </Row>
                </Container>
            </section>
            <CustomSlider/>
            <section className="startup-card-section">
                <h2 className="policies-title">Additional Policies</h2>
                <Container>
                    <Row>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                        <Cards image={CutWeight} title="Lawyers Professional Liability" description="Provides customized protection for lawyers against the many types of malpractice claims that can arise while providing professional services to clients and partners."></Cards>
                    </Row>
                </Container>
            </section>
            <section className="trusted-companies">
                <Container>
                    <div className="trusted-logo">
                        <Images image={cllogo6} />
                        <Images image={cllogo1} />
                        <Images image={cllogo2} />
                        <Images image={cllogo3} />
                        <Images image={cllogo5} />
                    </div>
                </Container>
            </section>
            <section className="article-section">
                <Container>
                    <h2 className="title-wrp">Related <span>Articles.</span></h2>
                    <Row>
                        <CustomCards image={article} content="How Much Does a Business Owners Policy (BOP) Cost?" buttonImage={ArrowBtn} />
                        <CustomCards image={article} content="How Much Does a Business Owners Policy (BOP) Cost?" buttonImage={ArrowBtn} />
                        <CustomCards image={article} content="How Much Does a Business Owners Policy (BOP) Cost?" buttonImage={ArrowBtn} />
                    </Row>
                </Container>
            </section>
        </>
    )
}