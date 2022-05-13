import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treetment, date, setTreetment }) => {
    const [user, loading] = useAuthState(auth);
    const { _id, name, slots } = treetment

    const handelFormSubmit = (event) => {
        event.preventDefault()
        const sloat = event.target.sloat.value;
        console.log(sloat, name, _id);
        setTreetment(null)
    }


    return (<div>


        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                <h3 className="font-bold text-2xl text-secondary">{name}</h3>

                <form onSubmit={handelFormSubmit} className='grid grid-cols-1 gap-5 mt-4 justify-items-center'>
                    <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="text" disabled value={slots[0]} className="input input-bordered input-secondary w-full max-w-xs" />
                    <select name='sloat' className="select select-bordered w-full max-w-xs">

                        {
                            slots.map((sloat, index) =>
                                <option
                                    key={index}
                                    value={sloat}
                                >{sloat}
                                </option>)
                        }
                    </select>

                    <input type="text" name='name' value={user.displayName} className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="email" name='email' value={user.useremail} className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="number" name='phone' placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="submit" value={'Submit'} className="bg-secondary btn text-white input input-bordered input-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default BookingModal;

