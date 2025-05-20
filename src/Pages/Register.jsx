import React, { use, useState } from 'react';
import Img from '../assets/RegisterImg.jpg';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const { createUser, setUser,setLoading } = use(AuthContext);
    const [error, setError] = useState();
    
     const location = useLocation();
      const navigate = useNavigate();
    const handleSingUp = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);
        const {name,photo ,email, password, ...rest } = Object.fromEntries(formData.entries());
        const userProfile = {
            email,
            name,
            photo,
            ...rest,
        }
        console.log(email, password, userProfile);
        setError('');

        const Upass = /[A-Z]/.test(password);
        const Lpass = /[a-z]/.test(password);
        const Length = password.length >= 6;
        if (!Upass) {
            setError("At least one Uppercase letter!");
            return;
        }
        if (!Lpass) {
            setError("At least one Lowercase letter!");
            return;
        }
        if (!Length) {
            setError('at least 6 characters password! ')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)

                })
                updateProfile(result.user, { displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...result.user, displayName: name, photoURL: photo });
                        Swal.fire({

                            icon: "success",
                            title: "Your account is created.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(`${location.state ? location.state : '/'}`);

                    })
                    .catch(error => {
                       console.log(error.message)
                    });
            }).catch(error => {
                console.log(error.message)
            }).finally(() => setLoading(false));
                    
   



    }
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

                </div>


                <div className="w-full h-full mx-auto lg:w-1/2 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h3>

                    <form onSubmit={handleSingUp} className="space-y-6">
                        <div>
                            <label className="block text-sm mb-2">Full Name</label>
                            <input
                                type="text"
                                name='name'
                                className="w-full px-4 py-3 border rounded-lg"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Photo URL</label>
                            <input
                                type="text"
                                name='photo'
                                className="w-full px-4 py-3 border rounded-lg"
                                placeholder="Enter your phot url"
                                required
                            />
                        </div>

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
                        <div>
                            {
                                error && <p className='text-sm text-red-500'>{error}</p>
                            }
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                        >
                            Create Account
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