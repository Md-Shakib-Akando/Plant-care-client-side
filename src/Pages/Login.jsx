import React, { use, useEffect } from 'react';
import Img from '../assets/RegisterImg.jpg';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const { userLogIn, setLoading, setUser, handleGoogle } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSingIn = () => {
        handleGoogle()
            .then(result => {
                const user = result.user;

                setUser(user)

                Swal.fire({

                    icon: "success",
                    title: "LogIn successful.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`);
            }).catch(error => {
                console.log(error)
            })
    }
    const handleLogIn = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());
        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({

                    icon: "success",
                    title: "LogIn successful.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`);
            }).catch(error => {
                console.error(error);

                Swal.fire({

                    icon: "error",
                    title: "Oops...",
                    text: "Invalid email or password",

                    showConfirmButton: false,
                    timer: 1500
                });
            }).finally(() => setLoading(false));

    }
    useEffect(() => {
        document.title = 'PlantCare | Login';
    }, [])
    return (
        <>
            <div className=" min-h-[calc(100vh-144px)]  bg-gray-100">
                <div className="flex min-h-[calc(100vh-144px)]  w-full items-center justify-center  bg-white shadow-lg rounded-lg overflow-hidden my-5 lg:my-0 ">

                    <div className="hidden lg:block w-1/2 relative">
                        <img
                            src={Img}
                            alt="Register"
                            className="  w-full h-[775px]  object-cover"
                        />


                    </div>


                    <div className="w-full h-full mx-auto lg:w-1/2 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">SIGN IN</h3>

                        <form onSubmit={handleLogIn} className="space-y-6">


                            <div>
                                <label className="block text-sm mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="w-full px-4 py-3 border rounded-lg"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2">Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    className="w-full px-4 py-3 border rounded-lg"
                                    placeholder="Enter a strong password"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember-me"
                                        className="h-4 w-4 cursor-pointer text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-700"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className="text-sm cursor-pointer text-green-600 hover:text-green-500"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                            >
                                Sign In
                            </button>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleGoogleSingIn}
                                className="flex  w-full items-center justify-center px-4 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 cursor-pointer hover:text-white !rounded-button whitespace-nowrap"
                            >
                                <FcGoogle size={32} className='mr-5'></FcGoogle>
                                Google
                            </button>


                            <div className="text-center mt-4">
                                <p className="text-sm">
                                    Don't have an account?{" "}
                                    <Link to="/Register" className="text-green-600 hover:underline">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;