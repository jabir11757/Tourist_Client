import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {


                // const selectedReview = user?.filter(usr => usr.email === user.email);
                setMyReview(data)

                console.log(data)


            })
    }, [user])
    return (
        <div>
            My reviews: {myReview.length}

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
                            myReview.map(review => <ReviewCard key={review._id} review={review} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;