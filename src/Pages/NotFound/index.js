import React from 'react';
import DefaultLayout from '../../Layouts/DefaultLayout/DefaultLayout';
import images from '../../Assets/Images';

const NotFound = () => {

    return (
        <DefaultLayout>
            <div className='text-center'>
                <img src={images.notFound} alt='Not-Found' />
            </div>
        </DefaultLayout>
    );
};

export default NotFound;