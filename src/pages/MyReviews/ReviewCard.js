import React from 'react';

const ReviewCard = ({ review }) => {
    const { serviceName, message } = review;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">

                    <img src="/tailwind-css-component-profile-4@56w.png" alt="" />

                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td> {message}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
        </tr>
    );
};

export default ReviewCard;