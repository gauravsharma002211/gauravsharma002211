import Slider from "react-slick";

export const CustomSlider = () => {
    const settings = {
        dots: false,
        nav:true,
        infinite: false,
        speed: 500,
    };

    return (

        <Slider {...settings}>
            <div>
                <h1>Easy 1</h1>
                <h3>Fast quotes. Quick purchase.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div>
                <h1>Easy 2</h1>
                <h3>Fast quotes. Quick purchase.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div>
                <h1>Easy 3</h1>
                <h3>Fast quotes. Quick purchase.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
        </Slider>
    );
}