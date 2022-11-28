import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {

    useTitle('Dashboard-all users')
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;

        }
    });

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch();
                    toast.success(`${user.name} deleted successfully `)
                }
            })

    }

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin')
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl text-center my-5'> All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th className='bg-primary'></th>
                            <th className='bg-primary'>Name</th>
                            <th className='bg-primary'>Email</th>
                            <th className='bg-primary'>Make Admin</th>
                            <th className='bg-primary'>Make Seller</th>
                            <th className='bg-primary'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm btn-primary'>Make Admin</button>}</td>
                                <td><button className='btn btn-sm btn-primary'>Make Seller</button></td>
                                <td>
                                    {user?.role !== 'admin' &&
                                        <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Confirm delete`}
                    message={`Are you sure you want to delete ${deletingUser.name}`}
                    closeModal={closeModal}
                    modalData={deletingUser}
                    successAction={handleDeleteUser}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;