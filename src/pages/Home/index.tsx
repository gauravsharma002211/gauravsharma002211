import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import cllogo1 from '../../assets/images/cl_logo1.png';
import cllogo2 from '../../assets/images/cl_logo2.png';
import cllogo3 from '../../assets/images/cl_logo3.png';
import cllogo5 from '../../assets/images/cl_logo5.png';
import cllogo6 from '../../assets/images/cl_logo6.png';
import startupPackage from '../../assets/images/package1.svg';
import smallBusiness from '../../assets/images/package2.svg';
import ECommerce from '../../assets/images/package3.svg';
import Fintech from '../../assets/images/package4.svg';
import note from '../../assets/images/note.svg';
import chat from '../../assets/images/chat.svg';
import watch from '../../assets/images/watch.png';
import insurance from '../../assets/images/insurance.png';
import man from '../../assets/images/man.png';
import GetTouch from '../../assets/images/GetTouch.svg';
import Meeting from '../../assets/images/Meeting.svg';
import document from '../../assets/images/Document.svg';
import Share from '../../assets/images/Share.svg';
import Check from '../../assets/images/Check.svg';
import Cards from "./Cards";
import MainBanner from "../../common/MainBanner";
import SubBanner from "../../common/SubBanner";
import coverge from '../../assets/images/coverage.png';
import questionCoverge from '../../assets/images/coverage2.png';
import RightArrow from '../../assets/images/RightArrow.svg';
import { CustomSlider } from "./Slider";
import Images from "../../common/Images";


const Home = () => {

    return (
        <>
            <MainBanner starMessage="Lorem Ipsum is simply dummy text" mainTitle="Business Insurance" subTitle="Incredibly Simple" content={`<ul>
                            <li><img src=${RightArrow}/> Best coverage for your business</li>
                            <li><img src=${RightArrow}/> Affordable plans</li>
                            <li><img src=${RightArrow}/> Tailored benefits for your busines</li>
                            <li><img src=${RightArrow}/> Expert consultation</li>
                        </ul>`} image={insurance} />
            <section className="trusted-companies">
                <Container>
                    <h2 className="title-wrp">Trusted by the most <span>innovative companies</span> in the INDIA</h2>
                    <div className="trusted-logo">
                        <Images image={cllogo6} />
                        <Images image={cllogo1} />
                        <Images image={cllogo2} />
                        <Images image={cllogo3} />
                        <Images image={cllogo5} />
                    </div>
                </Container>
            </section>
            <section className="packages-section">
                <Container>
                    <h2 className="title-wrp">Search recommended <span>packages for industries</span></h2>
                    <Row>
                        <Cards image={startupPackage} title="Startup Package" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard..." buttonTitle="Learn More" />
                        <Cards image={smallBusiness} title="Small Business" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard..." buttonTitle="Learn More" />
                        <Cards image={ECommerce} title="E-Commerce" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard..." buttonTitle="Learn More" />
                        <Cards image={Fintech} title="Fintech" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard..." buttonTitle="Learn More" />
                    </Row>
                </Container>
            </section>
            <SubBanner bgImage={coverge} whiteTitle="Find the Best Coverage " orangeTitle="for your business" content={`<p>Not sure which insurance you need?<br /> Let us help you.</p>`} buttonTitle="Get Quote" image={note} />
            <section className="quotes-slider">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className='p-0'>
                            <div className="quotes-img">
                                <img src={watch} className='img-fluid'/>
                            </div>
                        </Col>
                        <Col md={6} className='p-0'>
                            <div className="quotes-slide">
                                <CustomSlider/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="how-do-section">
                <Container>
                    <div className="how-do-box">
                        <Row className="align-items-center">
                            <Col md={8}>
                                <div className="how-do-info">
                                <h2>How We <span>Do It.</span></h2>
                                <strong>From algorithmic underwriting to instant certificates, we use smart technology to make policies custom-tailored, more affordable, and easier to buy and use.</strong>
                                <p>"The technology powering our platform represents a major step forward for the industry."</p>
                                <h4>Lorem Ipsum</h4>
                                <h5>Founder & CEO of COVRZY</h5>
                                </div>
                            </Col>
                            <Col md={4}>
                                <img src={man} className='img-fluid'/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="hows-work">
                <Container>
                    <div className="title">
                        <h2>How Claims Work.</h2>
                        <p>We are there for you when things go wrong.</p>
                    </div>
                    <div className="timeline-work">
                        <Row className="justify-content-center">
                            <Col lg={11}>
                            <div className="timeline">
                                <div className="timeline-desc right-side">
                                    <span><img src={GetTouch}/></span>
                                    <div className="content">
                                        <p>Get in Touch</p>
                                    </div>
                                </div>
                                <div className="timeline-desc left-side">
                                <span><img src={Meeting}/></span>
                                    <div className="content">
                                        <p>Schedule a meeting with <br/>our claims expert</p>
                                    </div>
                                </div>
                                <div className="timeline-desc right-side">
                                <span><img src={Share}/></span>
                                    <div className="content">
                                        <p>Share the required <br/>documents</p>
                                    </div>
                                </div>
                                <div className="timeline-desc left-side">
                                <span><img src={document}/></span>
                                    <div className="content">
                                        <p>Submit your Claim</p>
                                    </div>
                                </div>
                                <div className="timeline-desc right-side">
                                <span><img src={Check}/></span>
                                    <div className="content">
                                        <p>Track your claim</p>
                                    </div>
                                </div>
                                </div>
                                <div className="timeline-btn-wrp">
                                    <Button className="timeline-btn">Learn More</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <SubBanner bgImage={questionCoverge} whiteTitle="Questions?" orangeTitle="We’re Ready." content={`<p>We’ll help out if you’re unsure which<br /> insurance you need</p>`} buttonTitle="Launch Chat" image={chat} />
        </>

    )
}

export default Home;