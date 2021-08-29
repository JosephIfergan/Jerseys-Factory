import React from 'react';
import { Carousel } from 'react-bootstrap'

const HomeCarousel = () => {
    return (
        <>
            <Carousel className="home_carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/promo1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Powered by the best players</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/promo2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Powered by the best players</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/promo3.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="carousel-subtitle">Tous derrière les bleus !</h3>
                        <p>Powered by the best players</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    );
};

export default HomeCarousel;