import React from 'react';
import Slider_1 from '../../../images/slide_1.jpg'
import Slider_2 from '../../../images/slide_2.jpg'
import Slider_3 from '../../../images/slide_3.jpg'
import Slider_4 from '../../../images/slide_4.jpg'
import Slider_5 from '../../../images/slide_5.jpg'
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: Slider_1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: Slider_2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: Slider_3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: Slider_4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: Slider_5,
            prev: 4,
            id: 5,
            next: 1
        }
    ]
    return (
        <div className="carousel py-5">
            {
                bannerData.map(slide => <BannerItem key={slide.id} slide={slide} />)
            }
        </div>
    );
};

export default Banner;