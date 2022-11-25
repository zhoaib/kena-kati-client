import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'

const SignUp = () => {

    const { register, handleSubmit } = useForm()

    const handleSignUp = (data) => {
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input className='btn btn-primary w-full my-5' value='Sign Up' type="submit" />
                </form>
                <p>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-secondary w-full'>Login with Google</button>
            </div>
        </div>
    );
};

export default SignUp;