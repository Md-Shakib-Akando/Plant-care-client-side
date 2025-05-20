import React from 'react';
import Img from '../assets/RegisterImg.jpg';
import { Link } from 'react-router';
const Login = () => {
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
                        <div className="absolute " />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h2 className="text-3xl font-bold mb-4">Join PlantPal 🌱</h2>
                            <p className="text-lg">Grow with your green companions.</p>
                        </div>
                    </div>


                    <div className="w-full h-full mx-auto lg:w-1/2 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">SIGN IN</h3>

                        <form className="space-y-6">


                            <div>
                                <label className="block text-sm mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border rounded-lg"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2">Password</label>
                                <input
                                    type="password"
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
                                className="flex w-full items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 !rounded-button whitespace-nowrap"
                            >
                                <i className="fab fa-google text-xl mr-2"></i>
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