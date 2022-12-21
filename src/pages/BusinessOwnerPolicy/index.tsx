import Business from '../../assets/images/Business.png';
import network from '../../assets/images/network.svg';
import rating from '../../assets/images/rating.svg';
import GetBussiness from '../../assets/images/get-bussiness.png';
import cllogo1 from '../../assets/images/cl_logo1.png';
import cllogo2 from '../../assets/images/cl_logo2.png';
import cllogo3 from '../../assets/images/cl_logo3.png';
import cllogo5 from '../../assets/images/cl_logo5.png';
import cllogo6 from '../../assets/images/cl_logo6.png';
import article from '../../assets/images/article.png';
import ArrowBtn from '../../assets/images/ArrowBtn.png';
import MainBanner from '../../common/MainBanner';
import { Container, Row } from 'react-bootstrap';
import SubBanner from '../../common/SubBanner';
import Images from "../../common/Images";
import CustomCards from '../../common/CustomCards';
import RatingCards from './RatingCards';
import ScrollManu from './ScrollManu';

const BusinessOwnerPolicy = () => {

    return (
        <>
            <MainBanner mainTitle="Business Owners" subTitle="Policy" content={`<ul>
                            <li>COVRZY’s Business Owners Policy (BOP) includes market-leading
                            commercial property, general liability, and business interruption
                            insurance. Get it in minutes, not days</li>
                        </ul>`} image={Business} />
            <ScrollManu/>
            <SubBanner bgImage={GetBussiness} whiteTitle="Get your Business<br/> Owners Policy quote in less than 10 minutes" buttonTitle="Get Your Coverage Now" image={network} />
            <section className='rating-card'>
                <Container>
                    <Row>
                        <RatingCards image={rating} content={`“COVRZY has given the insurance industry
                                    a much-needed makeover that transforms
                                    something I always considered monotonous
                                    and dull into something streamlined
                                    and simple.”`} linkTitle="Ben Rollins" title="Axon Optics" />
                        <RatingCards image={rating} content={`“COVRZY has given the insurance industry
                                    a much-needed makeover that transforms
                                    something I always considered monotonous
                                    and dull into something streamlined
                                    and simple.”`} linkTitle="Ben Rollins" title="Axon Optics" />
                        <RatingCards image={rating} content={`“COVRZY has given the insurance industry
                                    a much-needed makeover that transforms
                                    something I always considered monotonous
                                    and dull into something streamlined
                                    and simple.”`} linkTitle="Ben Rollins" title="Axon Optics" />
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

export default BusinessOwnerPolicy;