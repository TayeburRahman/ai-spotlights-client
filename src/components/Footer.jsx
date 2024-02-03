import React, { useEffect, useState } from 'react'
import categories from "../../public/category.json";
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    const [bgColor, setBgColor] = useState(''); // State to hold body background color
    const [imageSrc, setImageSrc] = useState(''); // State to hold image source

    useEffect(() => {
        // Get the body background color
        const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

        // Set the background color state
        setBgColor(bodyBackgroundColor);

        // Check if the body background color is black
        if (bodyBackgroundColor === 'rgb(217, 247, 247)') {
            // Set the image source to the black-background version
            setImageSrc('https://i.ibb.co/9VWXHS6/download-2.png');
        } else {
            // Set the image source to the white-background version
            setImageSrc('https://i.ibb.co/9VWXHS6/download-2.png');
        }
    }, []);
    return (
        <>
            <footer className="bg-gray-900 dark:bg-white mt-5">
                <div className="container px-6 py-12 mx-auto">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-white dark:text-gray-800">Let’s get started on something great</h2>
                        <p className="max-w-md mx-auto mt-2 dark:text-gray-500 text-gray-400">Join over 4,000+ startups already growing with Ai Spotlights.</p>
                        <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
                            <button className="w-full px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Get started</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        <div>
                            <h3 className="text-sm font-medium dark:text-gray-500 text-gray-400">Product</h3>
                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Overview</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Features</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Solutions</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Tutorials</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Pricing</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Releases</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium dark:text-gray-500 text-gray-400">Company</h3>
                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">About us</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Careers</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Press</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">News</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Media kit</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Contact Us</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium dark:text-gray-500 text-gray-400">Resources</h3>
                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Blog</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Newsletter</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Events</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Help center</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Tutorials</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Supports</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium dark:text-gray-500 text-gray-400">Categories</h3>
                            <div className="flex flex-col items-start mt-4 space-y-4">
                                {categories.slice(0, 6).map((category, index) => (
                                    <Link to={`/ai-tools/${category?.replace(/\s+/g, "-")}`} key={index} value={category} className="capitalize dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">
                                        {category}
                                    </Link>
                                ))}
                            </div>

                        </div>
                        <div>
                            <h3 className="text-sm font-medium  dark:text-gray-500 text-gray-400">Social</h3>
                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Twitter</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">LinkedIn</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Github</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Facebook</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">AngelList</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Dribble</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium dark:text-gray-500 text-gray-400">Legal</h3>
                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Terms</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Privacy</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Cookies</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Licenses</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Settings</a>
                                <a href="/" className="dark:text-gray-700 transition-colors duration-200 text-gray-200 hover:text-blue-400 hover:underline dark:hover:text-blue-600">Contact</a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  dark:border-gray-200 md:my-10border-gray-700" />
                    <div className="flex flex-col items-center justify-between sm:flex-row">
                        <a href="/">
                            <img className="w-auto h-12" src={imageSrc} alt="" />
                        </a>
                        <p className="mt-4 text-sm  dark:text-gray-500 sm:mt-0text-gray-300">© Copyright 2023. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer