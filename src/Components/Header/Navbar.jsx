import React, { useContext } from 'react';
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
                        <GiTreehouse size={38} className='text-green-600' />

                        <h1 className='text-xl md:text-2xl font-semibold text-green-600'>PlantCare</h1>
                    </div>
                    <div className="navbar-center  hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-7  text-lg">
                            {NavItem}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        {
                            user ? (<div className='flex gap-1'>
                                {
                                    user.photoURL ? <img
                                        src={user.photoURL}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full border-2 border-blue-500"
                                        data-tooltip-id="profile-tooltip"
                                        data-tooltip-content={user?.displayName || 'No Name'}
                                    />  : <CgProfile size={32} />
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
                                    user?(  <button onClick={handleGoogleSingOut} className="btn  btn-outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white">Log Out</button>):(<>
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