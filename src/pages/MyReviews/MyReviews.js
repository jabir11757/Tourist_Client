import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';
import './MyReviews.css'

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        fetch('https://assignment-for-tourism-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {


                // const selectedReview = user?.filter(usr => usr.email === user.email);
                setMyReview(data)

                // console.log(data)


            })
    }, [user])

    const handleUpdate = (id) => {
        console.log(id)
        fetch(`https://assignment-for-tourism-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Updated' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = myReview.filter(rvw => rvw._id !== id);
                    const updating = myReview.find(rvw => rvw._id === id);
                    updating.status = 'Updated';

                    const newReviews = [updating, ...remaining];
                    setMyReview(newReviews);
                }
            })
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://assignment-for-tourism-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted!');
                        const remaining = myReview.filter(rvw => rvw._id !== id);
                        setMyReview(remaining)
                    }
                })
        }

    }
    return (
        <div className='review-Card'>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Service Name</th>
                            <th>Reviews</th>
                            <th>Action Delete</th>
                            <th>Action Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReview.map(review => <ReviewCard
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;