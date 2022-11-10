// import React, { useContext } from 'react';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import './ReviewSection.css'


// const ReviewSection = () => {
//     const { user } = useContext(AuthContext);

//     const handlePlaceOrder = (event) => {
//         event.preventDefault();

//         const form = event.target;
//         const name = form.name.value;
//         const message = form.message.value;

//         const review = {
//             name,
//             message
//         }

//     }

//     return (
//         <div className='text-center m-5'>
//             <h2 className='text-3xl font-bold text-center'>Reviews</h2>

//             <div className='review-card'>
//                 <table class="table-auto">
//                     <thead>
//                         <tr>
//                             <th>Song</th>
//                             <th>Artist</th>
//                         </tr>
//                     </thead>
//                     <tbody>


//                     </tbody>
//                 </table>
//             </div>

//             <form onSubmit={handlePlaceOrder}>
//                 <div>
//                     <h2 className='my-2'>Place Review</h2>
//                     <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
//                         <input name='name' type="text" placeholder="name" className="input input-ghost h-8 w-full input-bordered" />
//                         <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost h-8 w-full input-bordered" />
//                     </div>
//                     <textarea name='message' className='textarea textarea-bordered h-12 w-full my-4' placeholder='Review' />
//                     <input className='btn' type='submit' value='Submit' />
//                 </div>
//             </form>

//         </div>
//     );
// };

// export default ReviewSection;