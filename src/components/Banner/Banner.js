import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const cx = classNames.bind(styles);

const BANNER_ITEM = [
    {
        id: 1,
        image: 'https://media.fmplus.com.vn/uploads/sliders/8163dd5f-39b2-461e-8885-18da97624e94.jpg',
    },
    {
        id: 2,
        image: 'https://media.fmplus.com.vn/uploads/sliders/8163dd5f-39b2-461e-8885-18da97624e94.jpg',
    },
    {
        id: 3,
        image: 'https://media.fmplus.com.vn/uploads/sliders/8163dd5f-39b2-461e-8885-18da97624e94.jpg',
    },
];

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <Swiper navigation={true} modules={[Navigation]} className={cx('mySwiper')}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
