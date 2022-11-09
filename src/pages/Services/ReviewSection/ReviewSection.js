import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const ReviewSection = () => {
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = () => {

    }

    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold text-center'>Reviews</h2>

            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-xl my-8'>Place your valuable feedback</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" />
                </div>
                <textarea name='message' className='textarea textarea-bordered h-24 w-full my-4' placeholder='Your Message' />
                <input className='btn' type='submit' value='PLace your feedback' />
            </form>

        </div>
    );
};

export default ReviewSection;