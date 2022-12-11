import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Slideshow() {
    return (
        <>
        

            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block h-100'
                    itemId={1}
                    src='/images/background/image1.jpg'
                    alt='Not Found'
                >

                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block h-100'
                    itemId={2}
                    src='/images/background/image2.jpg'
                    alt='Not Found'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block h-100'
                    itemId={3}
                    src='/images/background/image3.jpg'
                    alt='Not Found'
                >
                </MDBCarouselItem>
            </MDBCarousel>
        </>
    );
}