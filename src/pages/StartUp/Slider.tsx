import Slider from "react-slick";
import Testimonial1 from '../../assets/images/Testimonial1.png';
import Quotes from '../../assets/images/Quotes.svg';

export const CustomSlider = () => {
    const settings = {
        dots: true,
        nav: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    centerPadding: '80px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '30px',
                }
            }
        ],
    };

    return (

        <section className="testimonial-slider">
                <div className="testimonial">
                    <Slider {...settings}>
                        <div className="testimonial-wrp">
                            <div className="testimonial-box">
                                <div className="client-img">
                                    <img src={Testimonial1} />
                                </div>
                                <div className="desc">
                                    <span><img src={Quotes} /></span>
                                    <p>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                                    <div className="client-widget">
                                        <h3>Kyle Merwin</h3>
                                        <p>CO-owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-wrp">
                            <div className="testimonial-box">
                                <div className="client-img">
                                    <img src={Testimonial1} />
                                </div>
                                <div className="desc">
                                    <span><img src={Quotes} /></span>
                                    <p>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                                    <div className="client-widget">
                                        <h3>Kyle Merwin</h3>
                                        <p>CO-owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-wrp">
                            <div className="testimonial-box">
                                <div className="client-img">
                                    <img src={Testimonial1} />
                                </div>
                                <div className="desc">
                                    <span><img src={Quotes} /></span>
                                    <p>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                                    <div className="client-widget">
                                        <h3>Kyle Merwin</h3>
                                        <p>CO-owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-wrp">
                            <div className="testimonial-box">
                                <div className="client-img">
                                    <img src={Testimonial1} />
                                </div>
                                <div className="desc">
                                    <span><img src={Quotes} /></span>
                                    <p>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                                    <div className="client-widget">
                                        <h3>Kyle Merwin</h3>
                                        <p>CO-owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
    );
}