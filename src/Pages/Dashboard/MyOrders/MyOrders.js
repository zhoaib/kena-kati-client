import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl text-center my-5'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Meeting Location</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.map((booking, i) => <tr
                                key={i}
                                className="hover">
                                <th>{i + 1}</th>
                                <td>{booking.camera}</td>
                                <td>${booking.resaleprice}</td>
                                <td>{booking.location}</td>
                                <td>{booking.phone}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;