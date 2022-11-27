import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const menuItems = <>
        <li className='bg-secondary rounded-xl m-3'><Link to='/'>Home</Link></li>
        <li className='bg-secondary rounded-xl m-3'><Link to='/blog'>Blog</Link></li>
        {user?.uid ?
            <>
                <li className='bg-secondary rounded-xl m-3'><Link to='/Dashboard'>Dashboard</Link></li>
                <li className='bg-secondary rounded-xl m-3'><button onClick={handleLogOut}>Sign Out</button></li>
            </>

            : <>
                <li className='bg-secondary rounded-xl m-3'><Link to='/login'>Login</Link></li>
                <li className='bg-secondary rounded-xl m-3 ' >

                    <Link>Login As
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></Link>

                    <ul className='bg-secondary rounded-xl '>
                        <li className='bg-secondary rounded-xl btn btn-sm mb-1 '><Link to='/login'>Login As Seller</Link></li>
                        <li className='bg-secondary rounded-xl btn btn-sm '><Link>Login As Buyer</Link></li>
                    </ul>
                </li>
            </>}


    </>
    return (
        <div className="navbar bg-primary font-bold rounded mb-10 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-secondary lg:hidden mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-secondary normal-case text-xl ">Kena-Kati</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-secondary lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;