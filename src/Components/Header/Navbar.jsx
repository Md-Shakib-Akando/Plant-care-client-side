import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { GiTreehouse } from "react-icons/gi";
import { AuthContext } from '../../AuthContext';
import { CgProfile } from 'react-icons/cg';
import Swal from 'sweetalert2';
import { Tooltip as ReactTooltip } from 'react-tooltip'


const NavItem = <>
    <NavLink to='/' ><li className='px-2 py-1 rounded-sm'>Home</li></NavLink>
    <NavLink to='All-Plants' ><li className='px-2 py-1 rounded-sm'>All-Plants</li></NavLink>
    <NavLink to='Add-Plants' ><li className='px-2 py-1 rounded-sm'>Add-Plants</li></NavLink>
    <NavLink to='My-Plants' ><li className='px-2 py-1 rounded-sm'>My-Plants</li></NavLink>

</>

const Navbar = () => {
    const { user, setUser, handleLogOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):"dark")
    const handleToggle=e=>{
        if(e.target.checked){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localTheme=localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
    const handleGoogleSingOut = () => {
        handleLogOut()
            .then(result => {
                console.log(result)
                Swal.fire({

                    icon: "success",
                    title: "LogOut successful.",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(null);


                navigate('/login')
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <>

            <div className="bg-base-100 shadow-sm">
                <div className='navbar py-5 max-w-11/12 mx-auto'>
                    <div className="navbar-start space-x-0.5 ">
                        <img className='h-[50px] w-[50px]' src="/logo.png" alt="" />

                        <h1 className='text-xl md:text-2xl font-semibold text-green-600'>PlantCare</h1>
                    </div>
                    <div className="navbar-center  hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-7  text-lg">
                            {NavItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='mr-7 border-1 border-gray-400 bg-base-300 p-1 rounded-full'>
                            <label className="swap swap-rotate">
                            
                            <input type="checkbox"
                            checked={theme=='dark'? true:false}
                             onChange={handleToggle} />

                           
                            <svg
                                className="swap-on h-7 w-7 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                           
                            <svg
                                className="swap-off h-7 w-7 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                        </div>

                        {
                            user ? (<div className='flex gap-1'>
                                {
                                    user.photoURL ? <img
                                        src={user.photoURL}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full border-2 border-blue-500"
                                        data-tooltip-id="profile-tooltip"
                                        data-tooltip-content={user?.displayName || 'No Name'}
                                    /> : <CgProfile size={32} />
                                } <div>
                                    <button onClick={handleGoogleSingOut} className="btn hidden lg:flex btn-outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white">Log Out</button>

                                </div>
                            </div>) : (<>
                                <div className='hidden lg:flex gap-3'>
                                    <NavLink to='login'><button className="btn btn-outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white">Login</button></NavLink>
                                    <NavLink to='Register'><button className="btn btn-outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white">Register</button></NavLink>
                                </div>
                            </>)
                        }
                        <ReactTooltip id="profile-tooltip" place="left" />




                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 -right-6 w-52 p-2 shadow">
                                {NavItem}
                                {
                                    user ? (<button onClick={handleGoogleSingOut} className="btn  btn-outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white">Log Out</button>) : (<>
                                        <div className='flex gap-1 mt-1'>
                                            <NavLink to='login'><button className="btn btn-outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white">Login</button></NavLink>
                                            <NavLink to='Register'><button className="btn btn-outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white">Register</button></NavLink>
                                        </div>
                                    </>)
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;