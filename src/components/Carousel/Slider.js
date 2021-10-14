import React from 'react';
import {Carousel} from 'react-bootstrap';
import Slideone from '../../asset/images/slideone.png';
import Slidetwo from '../../asset/images/slidetoo.jpg'
import Slidethree from '../../asset/images/slider three.jpg';
const Slider = () => {
    return (
        <div className="ms-4 mt-4 mb-4 row">
            <div className="mx-auto col-lg-8 col-sm-12 col-md-12">
            <Carousel className="w-75">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block h-50 w-100"
                    src={Slideone}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block h-50 w-100"
                    src={Slidetwo}
                    alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block h-50 w-100"
                    src={Slidethree}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>             
            </div>
        </div>
    );
};

export default Slider;