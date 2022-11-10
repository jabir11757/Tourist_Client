import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {


                const selectedReview = user?.filter(usr => usr.email === user.email);
                setMyReview(selectedReview)

                console.log(data)


            })
    }, [user])
    return (
        <div>
            My reviews: {myReview.length}
        </div>
    );
};

export default MyReviews;