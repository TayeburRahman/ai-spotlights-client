import React from 'react'
import categories from "../../public/category.json";
import { Link, NavLink } from 'react-router-dom'

const AllCategories = () => {
    return (
        <div className="container wrapper my-10">
            <h1 className='heading text-7xl text-center'>All Categories</h1>
            <div className="wrapper my-20 grid grid-cols-3">
                {categories.map((category, index) => (
                    <Link to={`/ai-tools/${category?.replace(/\s+/g, "-")}`} key={index} value={category} className="m-3 block max-w-sm p-6 dark:bg-slate-50 border dark:border-gray-200 rounded-lg shadow dark:hover:bg-gray-100 bg-gray-800 border-gray-700 hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-900 text-white">{category}</h5>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default AllCategories