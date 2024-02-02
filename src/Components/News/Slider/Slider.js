import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import classNames from 'classnames/bind';
import styles from './Slider.module.css';
const cx = classNames.bind(styles);

const SliderComponent = ({ randomNews }) => {
  const [index, setIndex] = useState(0);
  const rightBtnRef = useRef(null);
  const leftBtnRef = useRef(null);
  const imgNumberLiRefs = useRef([]);

  useEffect(() => {
    const rightbtn = rightBtnRef.current;
    const leftbtn = leftBtnRef.current;
    const imgNumber = document.querySelectorAll('.slider-content-top img');

    const rightClickHandler = () => {
      setIndex((prevIndex) => (prevIndex + 1) % imgNumber.length);
    };

    const leftClickHandler = () => {
      setIndex((prevIndex) => (prevIndex - 1 + imgNumber.length) % imgNumber.length);
    };

    const imageClickHandler = (clickedIndex) => {
      setIndex(clickedIndex);
    };

    const removeActive = () => {
      let imgActive = document.querySelector('.active');
      imgActive && imgActive.classList.remove("active");
    };

    const imgAuto = () => {
      setIndex((prevIndex) => (prevIndex + 1) % imgNumber.length);
      removeActive();
    };

    rightbtn.addEventListener("click", rightClickHandler);
    leftbtn.addEventListener("click", leftClickHandler);

    imgNumberLiRefs.current.forEach((image, i) => {
      image.addEventListener("click", () => {
        removeActive();
        imageClickHandler(i);
        image.classList.add("active");
      });
    });

    const intervalId = setInterval(imgAuto, 4000);

    // Cleanup event listeners and intervals when component unmounts
    return () => {
      rightbtn.removeEventListener("click", rightClickHandler);
      leftbtn.removeEventListener("click", leftClickHandler);
      imgNumberLiRefs.current.forEach((image) => {
        image.removeEventListener("click", imageClickHandler);
      });
      clearInterval(intervalId);
    };

  }, [index]);

  return (
    <section className={cx('slider')}>
      <div className={cx('container')}>
        <div className={cx('slider-content')}>
          <div className={cx('slider-content-top-container')}>
            <div className={cx('slider-content-top')}>
              {randomNews.map((item, i) => (
                <a key={i} href="">
                  <img src={item.image} alt={item.title} style={{ right: `${i * 100}%` }} />
                </a>
              ))}
            </div>
            <div className={cx('slider-content-top-btn')}>
              <i ref={leftBtnRef} className="fas fa-chevron-left"><ArrowLeft /></i>
              <i ref={rightBtnRef} className="fas fa-chevron-right"><ArrowRight /></i>
            </div>
          </div>
          <div className={cx('slider-content-bottom')}>
            {randomNews.map((item, i) => (
              <li key={i} ref={(el) => (imgNumberLiRefs.current[i] = el)} className={i === index ? cx('active') : ''}>
                {item.title}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
