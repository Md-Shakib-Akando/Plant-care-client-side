import React from 'react';
import Swal from 'sweetalert2';

const NewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Subscription successful!",
            showConfirmButton: false,
            timer: 1500,
        });
        e.target.reset();
    };
    return (
        <>
            <div className="bg-green-600 rounded-lg p-8 mb-8 text-white">
                <div className="md:flex items-center justify-between">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">
                            Join Our Green Community
                        </h2>
                        <p className="text-green-100">
                            Subscribe to our newsletter for plant care tips, exclusive
                            offers, and first access to new arrivals.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                required
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 bg-white rounded-md text-gray-900 border-none focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <button
                                type="submit"
                                className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-md font-medium cursor-pointer !rounded-button whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-sm text-green-100 mt-2">
                            We respect your privacy and will never share your information.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;