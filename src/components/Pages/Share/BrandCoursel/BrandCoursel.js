import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../../assets/Brand/Brand1.png'
import Brand2 from '../../../../assets/Brand/Brand2.png'
const BrandCoursel = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCoursel;