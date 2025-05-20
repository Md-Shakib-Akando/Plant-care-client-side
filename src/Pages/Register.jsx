import React from 'react';
import Img from '../assets/RegisterImg.jpg';
import { Link } from 'react-router';
const Register = () => {
    return (
        <>

            <div className=" min-h-[calc(100vh-144px)]  bg-gray-100">
                <div className="flex w-full items-center justify-center  bg-white shadow-lg rounded-lg overflow-hidden my-5 lg:my-0">

                    <div className="hidden lg:block w-1/2 relative">
                        <img
                            src={Img}
                            alt="Register"
                            className="  w-full h-[795px]  object-cover"
                        />
                        <div className="absolute " />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h2 className="text-3xl font-bold mb-4">Join PlantPal 🌱</h2>
                            <p className="text-lg">Grow with your green companions.</p>
                        </div>
                    </div>


                    <div className="w-full h-full mx-auto lg:w-1/2 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h3>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border rounded-lg"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Photo URL</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border rounded-lg"
                                    placeholder="Enter your phot url"
                                    required
                                />
                            </div>

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

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                            >
                                Create Account
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
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-green-600 hover:underline">
                                        Sign in
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

export default Register;