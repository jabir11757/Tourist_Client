import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './ReviewSection.css'


const ReviewSection = ({ uReview }) => {
    const { name, message, photoURL } = uReview;
    console.log(photoURL)


    return (
        <div className='text-center m-5'>
            <div className='flex'>
                <div className='image'>
                    <img className='rounded-xl' style={{ height: '25px' }} src="https://lh3.googleusercontent.com/a/ALm5wu19rGYaCZZR8EU6DuT0R2mMu79Is__GZuPxyj7cNA=s96-c" alt='' />
                </div>
                <th className='ms-2'>{name}</th>
            </div>
            {/* <th>{message}</th> */}
            <tbody className='message'>
                <tr>{message}</tr>
            </tbody>

        </div>
    );
};

export default ReviewSection;