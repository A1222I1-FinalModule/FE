import img from '../../../Assets/Images/News/image-upload.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as service from '../../../Services/API/NewsService.js';
import { Image, Pencil, Person, Star, Tags } from 'react-bootstrap-icons';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { imageDb } from '../../../FirebaseProduct/ConfigProduct.js';
import { v4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styles from './Create.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export function CreateNews() {
    const [selectedFile, setSelectedFile] = useState(``);
    const [previewImage, setPreviewImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const tagList = [
        {
            id: 1,
            name: 'male',
        },
        {
            id: 2,
            name: 'female',
        },
        {
            id: 3,
            name: 'children',
        },
        {
            id: 4,
            name: 'promotion',
        },
    ];

    const idToNameMapping = {
        1: "Nam giới",
        2: "Nữ giới",
        3: "Trẻ em",
        4: "Khuyến mãi",
    };

    const uploadFirebase = async () => {
        if (selectedFile) {
            const imgRef = ref(imageDb, `files/${v4()}`);
            await uploadBytes(imgRef, selectedFile);
            return await getDownloadURL(imgRef);
        }
        return null;
    };

    const handleCreate = async (values) => {
        setIsLoading(true);
        try {
            const imgUrl = await uploadFirebase();
            const obj = {
                ...values,
                tag: JSON.parse(values.tag),
                image: imgUrl,
            };
            await service.createNews(obj);
            navigate("/tin-tuc");
            console.log('tao thanh cong', obj);
            toast.success('Tạo tin tức thành công');
        } catch (e) {
            console.log("Loi khi tao tin", e);
            toast.error('Đã xảy ra lỗi khi tạo tin tức');
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileChange = event => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(selectedFile);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    return (
        <>
            <div className={cx("all")}>
                <div className={cx('my-body')}>
                    <div className={cx('my-section')}>
                        <Formik
                            initialValues={{
                                content: '',
                                creator: '',
                                image: '',
                                title: '',
                                tag: JSON.stringify(tagList[0]),
                            }}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                handleCreate(values);
                                resetForm();
                            }}
                            validationSchema={
                                Yup.object({
                                    title: Yup.string()
                                        .required('Không được trống'),
                                    content: Yup.string()
                                        .required("Không được để trống"),
                                    creator: Yup.string()
                                        .required("Không được để trống")
                                })
                            }
                        >
                            <Form id="create-news">
                                <div className={cx("heade-title")}><h1>Tạo Tin Tức</h1></div>
                                <div className={cx('inputbox')}>
                                    <div className={cx('icon')}>
                                        <Tags />
                                    </div>
                                    <Field as="select" name="tag">
                                        {tagList.map((tag) => (
                                            <option key={tag.id} value={JSON.stringify(tag)}>
                                                - {idToNameMapping[tag.id]} -
                                            </option>
                                        ))}
                                    </Field>
                                    <label htmlFor="">Nhãn</label>
                                </div>
                                <div className={cx('inputbox')}>
                                    <div className={cx('icon')}>
                                        <Star />
                                    </div>
                                    <Field type="text" required="" placeholder={'Enter the title'} name="title" />
                                    <label htmlFor="">Tiêu đề</label>
                                    <ErrorMessage name="title" className={cx('form-err')} component='span'></ErrorMessage>
                                </div>
                                <div className={cx('inputbox')}>
                                    <div className={cx('icon')}>
                                        <Pencil />
                                    </div>
                                    <Field
                                        as="textarea"
                                        placeholder={'Enter your content'}
                                        name="content"
                                    />
                                    <label htmlFor="">Nội dung</label>
                                    <ErrorMessage name="content" className={cx('form-err')} component='span'></ErrorMessage>
                                </div>
                                <div className={cx('inputbox')}>
                                    <div className={cx('icon')}>
                                        <Person />
                                    </div>
                                    <Field type="text" required="" placeholder={'Enter the creator'} name="creator" />
                                    <label htmlFor="">Tác giả</label>
                                    <ErrorMessage name="creator" className={cx('form-err')} component='span'></ErrorMessage>
                                </div>
                                <div className={cx('image-upload')}>
                                    <label htmlFor="input-file">
                                        {previewImage ? (
                                            <img src={previewImage} className={cx('picture')} />
                                        ) : (
                                            <img src={img} className={cx('picture')} />
                                        )}
                                        <div className={cx('icon')}>
                                            <Image />
                                        </div>
                                    </label>
                                    <Field
                                        type="file"
                                        accept="image/jpeg, image/png, image/jpg"
                                        id="input-file"
                                        className={cx("input-imgg")}
                                        value={""}
                                        onChange={handleFileChange}
                                        name="image"
                                    />
                                    <ErrorMessage name="image" className={cx('form-err')} component='span'></ErrorMessage>
                                </div>
                                {isLoading ? (
                                    <button form="create-news" type="submit">
                                        Đang tạo... <br />
                                        <small>(Hãy chờ vài giây :D)</small>
                                    </button>
                                ) : (
                                    <button form="create-news" type="submit">
                                        Tạo mới
                                    </button>
                                )}
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}
