import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs"{...register("email")} />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs"{...register("password")} />
                    </div>

                    <input className='btn btn-primary w-full my-5' value='Login' type="submit" />
                </form>
                <p>Don't have an account? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-secondary w-full'>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;