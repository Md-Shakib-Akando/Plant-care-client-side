import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Img1 from '../../assets/SlideImg1.jpg'
import Img2 from '../../assets/SlideImg2.jpg'
import Img3 from '../../assets/SlideImg3.jpg'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className=" rounded-lg overflow-hidden shadow-lg h-[calc(100vh-144px)]">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500 }}
                loop={true}
                slidesPerView={1}
                className="h-full"
            >

                <SwiperSlide className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                    <div className="relative h-full w-full">

                        <div
                            className="absolute inset-0 bg-cover bg-center z-0"
                            style={{
                                backgroundImage: `url(${Img2})`,
                            }}
                        ></div>


                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent z-10"></div>


                        <div className="relative z-20 flex h-full items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
                            <div className="w-full flex flex-col  justify-center items-center  text-white space-y-5 xl:space-y-7">
                                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                                    Master Plant Care
                                </h1>
                                <p className="text-center text-base sm:text-lg md:text-xl">
                                    Never miss a watering day with our smart tracking system
                                    that reminds you when your plants need attention.
                                </p>
                                <div>
                                    <Link to='/AllPlants'>
                                    <button className="bg-white/10 hover:bg-green-600 cursor-pointer border border-white hover:border-green-600 text-white  px-6 py-3 rounded-md font-medium transition duration-300">
                                        Explore Plants
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                    <div className="relative h-full w-full">

                        <div
                            className="absolute inset-0 bg-cover bg-center z-0"
                            style={{
                                backgroundImage: `url(${Img1})`,
                            }}
                        ></div>


                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent z-10"></div>


                        <div className="relative z-20 flex h-full items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
                            <div className="w-full flex flex-col  justify-center items-center  text-white space-y-5 xl:space-y-7">
                                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                                    Grow Happier, Healthier Plants
                                </h1>
                                <p className="text-center text-base sm:text-lg md:text-xl">
                                    Simplify plant care with reminders, schedules, and a dashboard made just for plant lovers.
                                </p>
                                <div>
                                     <Link to='/AllPlants'>
                                    <button className="bg-white/10 hover:bg-green-600 cursor-pointer border border-white hover:border-green-600 text-white  px-6 py-3 rounded-md font-medium transition duration-300">
                                        Explore Plants
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                    <div className="relative h-full w-full">

                        <div
                            className="absolute inset-0 bg-cover bg-center z-0"
                            style={{
                                backgroundImage: `url(${Img3})`,
                            }}
                        ></div>


                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent z-10"></div>


                        <div className="relative z-20 flex h-full items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
                            <div className="w-full flex flex-col  justify-center items-center  text-white space-y-5 xl:space-y-7">
                                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                                    Bring Nature Indoors
                                </h1>
                                <p className="text-center text-base sm:text-lg md:text-xl">
                                    Discover the joy of plant parenthood with our
                                    comprehensive care guides and tracking tools.
                                </p>
                                <div>
                                     <Link to='/AllPlants'>
                                    <button className="bg-white/10 hover:bg-green-600 cursor-pointer border border-white hover:border-green-600 text-white  px-6 py-3 rounded-md font-medium transition duration-300">
                                        Explore Plants
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;
