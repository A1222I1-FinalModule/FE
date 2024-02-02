import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import * as service from '../../../Services/API/NewsService.js';
import img1 from '../../../Assets/Images/News/photo6.jpeg';
import img2 from '../../../Assets/Images/News/photo7.jpeg';
import img3 from '../../../Assets/Images/News/photo8.jpeg';
import img4 from '../../../Assets/Images/News/photo9.jpeg';
import { Plus } from 'react-bootstrap-icons';
import SliderComponent from '../../../Components/News/Slider/Slider.js';
import classNames from 'classnames/bind';
import styles from './List.module.css';
import { NewsDetail } from '../Detail/Detail.js';
import { SmallList } from '../../../Components/News/SmallList/SmallList.js';
const cx = classNames.bind(styles);

export function NewsList() {
    const malePartRef = useRef(null);
    const femalePartRef = useRef(null);
    const childrenPartRef = useRef(null);
    const salePartRef = useRef(null);
    const [fullMaleList, setFullMaleList] = useState([]);
    const [fullFemaleList, setFullFemaleList] = useState([]);
    const [fullChildrenList, setFullChildrenList] = useState([]);
    const [fullPromotionList, setFullPromotionList] = useState([]);
    const [cutMaleList, setCutMaleList] = useState([]);
    const [cutFemaleList, setCutFemaleList] = useState([]);
    const [cutChildrenList, setCutChildrenList] = useState([]);
    const [cutPromotionList, setCutPromotionList] = useState([]);
    const [randomNews, setRandomNews] = useState([]);
    const [selectedNewsId, setSelectedNewsId] = useState(0);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedListByTag, setSelectedListByTag] = useState([]);
    const [showSmallModal, setShowSmallModal] = useState(false);

    useEffect(() => {
        getList();
    }, []);

    console.log(selectedListByTag);

    const truncateContent = (content) => {
        if (content.length <= 37) {
            return content;
        }
        return content.slice(0, 34) + '...';
    };

    const truncateTitle = (title) => {
        if (title.length <= 20) {
            return title;
        }
        return title.slice(0, 17) + '...';
    };

    const getList = async () => {
        try {
            const data = await service.getAll();
            console.log(data);

            const { maleList, femaleList, childrenList, promotionList } = data;

            console.log("male", maleList);
            console.log("female", femaleList);
            console.log("children", childrenList);
            console.log("promotion", promotionList);

            setFullMaleList(maleList);
            setFullFemaleList(femaleList);
            setFullChildrenList(childrenList);
            setFullPromotionList(promotionList);

            const limitedMaleList = maleList.slice(-6).map((item) => ({
                ...item,
                title: truncateTitle(item.title),
                content: truncateContent(item.content),
            }));
            const limitedFemaleList = femaleList.slice(-6).map((item) => ({
                ...item,
                title: truncateTitle(item.title),
                content: truncateContent(item.content),
            }));
            const limitedChildrenList = childrenList.slice(-6).map((item) => ({
                ...item,
                title: truncateTitle(item.title),
                content: truncateContent(item.content),
            }));
            const limitedPromotionList = promotionList.slice(-3).map((item) => ({
                ...item,
                title: truncateTitle(item.title),
                content: truncateContent(item.content),
            }));

            const sliderNewsList = [limitedMaleList[0], limitedFemaleList[0], limitedChildrenList[0], limitedPromotionList[0]];
            console.log("slide news list", sliderNewsList);
            setRandomNews(sliderNewsList);
            setCutMaleList(limitedMaleList);
            setCutFemaleList(limitedFemaleList);
            setCutChildrenList(limitedChildrenList);
            setCutPromotionList(limitedPromotionList);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            {/* Slider 1 */}
            <SliderComponent randomNews={randomNews} />

            {/* Slider 2 */}
            <section className={cx('small-slider')}>
                <div className={cx('container')}>
                    <div className={cx('small-slider-content')}>
                        <a onClick={() => malePartRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            <img src={img1} alt="photo 6" />
                        </a>
                        <a onClick={() => femalePartRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            <img src={img2} alt="photo 7" />
                        </a>
                        <a onClick={() => childrenPartRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            <img src={img3} alt="photo 8" />
                        </a>
                        <a onClick={() => salePartRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            <img src={img4} alt="photo 9" />
                        </a>
                    </div>
                </div>
            </section>

            {/* MalePart */}
            <section ref={malePartRef} className={cx('male-part')}>
                <div className={cx('container')}>
                    <h1 className={cx('container-title')}>Thời Trang Nam</h1>
                    <div className={cx('body-content')}>
                        <ul className={cx('news-list')}>
                            {cutMaleList.slice().reverse().map((item, index) => (
                                <div key={index} className={cx('news')}>
                                    <img src={`${item.image}`} alt={`photo${index + 1}`} />
                                    <div className={cx('detail')}>
                                        <div className={cx('title')}>{item.title}</div>
                                        <div className={cx('creator')}>
                                            <i className={cx('fas fa-user')} />
                                            {item.creator}
                                        </div>
                                        <div className={cx('desc')}>{item.content}</div>
                                        <button
                                            className={cx('more-button')}
                                            onClick={() => {
                                                setShowDetailModal(true);
                                                setSelectedNewsId(item.id);
                                            }}
                                        >
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <a className={cx('see-more')}
                            onClick={() => {
                                setShowSmallModal(true);
                                setSelectedListByTag(fullMaleList);
                            }}>
                            Xem thêm bài viết
                        </a>
                    </div>
                </div>
            </section>

            {/* FemalePart */}
            <section ref={femalePartRef} className={cx('female-part')}>
                <div className={cx('container')}>
                    <h1 className={cx('container-title')}>Thời Trang Nữ</h1>
                    <div className={cx('body-content')}>
                        <ul className={cx('news-list')}>
                            {cutFemaleList.slice().reverse().map((item, index) => (
                                <div key={index} className={cx('news')}>
                                    <img src={`${item.image}`} alt={`photo${index + 1}`} />
                                    <div className={cx('detail')}>
                                        <div className={cx('title')}>{item.title}</div>
                                        <div className={cx('creator')}>
                                            <i className={cx('fas fa-user')}></i>
                                            {item.creator}
                                        </div>
                                        <div className={cx('desc')}>{item.content}</div>
                                        <button
                                            className={cx('more-button')}
                                            onClick={() => {
                                                setShowDetailModal(true);
                                                setSelectedNewsId(item.id);
                                            }}>
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <a className={cx('see-more')}
                            onClick={() => {
                                setShowSmallModal(true);
                                setSelectedListByTag(fullFemaleList);
                            }}>
                            Xem thêm bài viết
                        </a>
                    </div>
                </div>
            </section>

            {/* ChildrenPart */}
            <section ref={childrenPartRef} className={cx('children-part')}>
                <div className={cx('container')}>
                    <h1 className={cx('container-title')}>Thời Trang Cho Bé</h1>
                    <div className={cx('body-content')}>
                        <ul className={cx('news-list')}>
                            {cutChildrenList.slice().reverse().map((item, index) => (
                                <div key={index} className={cx('news')}>
                                    <img src={`${item.image}`} alt={`photo${index + 1}`} />
                                    <div className={cx('detail')}>
                                        <div className={cx('title')}>{item.title}</div>
                                        <div className={cx('creator')}>
                                            <i className={cx('fas fa-user')}></i>
                                            {item.creator}
                                        </div>
                                        <div className={cx('desc')}>{item.content}</div>
                                        <button
                                            className={cx('more-button')}
                                            onClick={() => {
                                                setShowDetailModal(true);
                                                setSelectedNewsId(item.id);
                                            }}>
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <a className={cx('see-more')}
                            onClick={() => {
                                setShowSmallModal(true);
                                setSelectedListByTag(fullChildrenList);
                            }}>
                            Xem thêm bài viết
                        </a>
                    </div>
                </div>
            </section>

            {/* Promotion Part */}
            <section ref={salePartRef} className={cx('sale-part')}>
                <div className={cx('container')}>
                    <h1 className={cx('container-title')}>Ưu Đãi</h1>
                    <div className={cx('body-content')}>
                        <ul className={cx('news-list')}>
                            {cutPromotionList.slice().reverse().map((item, index) => (
                                <div key={index} className={cx('news')}>
                                    <img src={`${item.image}`} alt={`photo${index + 1}`} />
                                    <div className={cx('detail')}>
                                        <div className={cx('title')}>{item.title}</div>
                                        <div className={cx('creator')}>
                                            <i className={cx('fas fa-user')}></i>
                                            {item.creator}
                                        </div>
                                        <div className={cx('desc')}>{item.content}</div>
                                        <button
                                            className={cx('more-button')}
                                            onClick={() => {
                                                setShowDetailModal(true);
                                                setSelectedNewsId(item.id);
                                            }}>
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <a className={cx('see-more')}
                            onClick={() => {
                                setShowSmallModal(true);
                                setSelectedListByTag(fullPromotionList);
                            }}>
                            Xem thêm bài viết
                        </a>
                    </div>
                </div>
            </section>

            {/* Create Button */}
            <Link to={"/tao-tin-tuc"} >
                <div className={cx("createNew")}>
                    <Plus />
                </div>
            </Link>

            <ToastContainer />
            {selectedNewsId != 0 && <NewsDetail showModal={showDetailModal} setShowModal={setShowDetailModal} newsId={selectedNewsId} setNewsId={setSelectedNewsId} />}
            {selectedListByTag.length > 0 && <SmallList showModal={showSmallModal} setShowModal={setShowSmallModal} selectedListByTag={selectedListByTag} setSelectedListByTag={setSelectedListByTag} />}
        </>
    );
}
