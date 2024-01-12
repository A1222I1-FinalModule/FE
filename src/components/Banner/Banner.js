import { useRef } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

const BANNER_IMG = [
    {
        id: 1,
        banner: 'https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/slider_1.jpg?1704698067194',
    },
    {
        id: 2,
        banner: 'https://bizweb.dktcdn.net/100/438/408/themes/936254/assets/slider_3.jpg?1704698067194',
    },
];

function Banner() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={500}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                className={cx('banner-slide')}
            >
                {BANNER_IMG.map((item) => (
                    <SwiperSlide key={item.id} className={cx('banner-item')}>
                        <img src={item.banner} alt="" className={cx('thumbnail')} />
                    </SwiperSlide>
                ))}

                <button ref={prevRef} className={cx('prev')}>
                    <ChevronLeftIcon />
                </button>

                <button ref={nextRef} className={cx('next')}>
                    <ChevronRightIcon />
                </button>
            </Swiper>
        </div>
    );
}

export default Banner;
