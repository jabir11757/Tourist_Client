import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './ReviewSection.css'


const ReviewSection = ({ uReview }) => {
    const { name, message, photoURL } = uReview;
    // const photo = uReview?.photoURL;
    // console.log(photo)


    return (
        <div className='text-center m-3'>
            <div className='flex'>
                {
                    photoURL ? <>
                        <div className="avatar">
                            <div className="image w-4 rounded-full">
                                <img src={photoURL} alt='' />
                            </div>
                        </div>
                    </> :

                        <FaUserAlt className=' h-3' />

                }
                <h1 className='name'><strong>{name}</strong></h1>
            </div>
            {/* <th>{message}</th> */}
            <tbody className='message'>
                <h1><small>{message}</small></h1>
            </tbody>

        </div>
    );
};

export default ReviewSection;