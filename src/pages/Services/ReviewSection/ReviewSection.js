import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './ReviewSection.css'


const ReviewSection = ({ uReview }) => {
    const { name, message } = uReview;


    return (
        <div className='text-center m-5'>
            <div>
                <img className='me-4 rounded-xl mt-3' style={{ height: '25px' }} src={uReview?.photoURL ? uReview.photoURL : <FaUserAlt />} alt='' />
                <th>{name}</th>
            </div>
            {/* <th>{message}</th> */}
            <tbody>
                <tr>{message}</tr>
            </tbody>

        </div>
    );
};

export default ReviewSection;