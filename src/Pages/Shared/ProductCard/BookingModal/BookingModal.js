import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({ camera, setCamera }) => {
    const { name, resaleprice } = camera;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bname = form.bname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const resaleprice = form.resaleprice.value;

        const booking = {
            camera: name,
            buyer: bname,
            email,
            phone,
            location,
            resaleprice,
        }
        console.log(booking)
        setCamera(null);

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center py-10">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5'>
                        <input name='bname' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                        <input name='resaleprice' disabled value={resaleprice} type="text" placeholder="Resale Price" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;