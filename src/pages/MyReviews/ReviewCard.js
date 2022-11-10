import React from 'react';

const ReviewCard = ({ review, handleDelete, handleUpdate }) => {
    const { serviceName, message, _id, status } = review;

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
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'updating'}</button>
            </th>
        </tr>
    );
};

export default ReviewCard;