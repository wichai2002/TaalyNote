"use client"
import React, { useState } from "react"

// import css
import "@/styles/daily.css"

const DailyRecord = () => {
    return (
        <div className="lg:border-r-2 lg:border-zinc-900 px-2 f-cs">
            <div className="mb-4 mx-4 ">
                <label className="block mb-2" htmlFor="title">
                    TITLE
                </label>
                <input
                    className="shadow  border rounded w-full py-1 px-6 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" type="text" placeholder="Title"
                />
            </div>

            <div className="mb-4 mx-4 py-3">
                <label className="block mb-2" htmlFor="title">
                    TODO LIST ON TODAY
                </label>
                <div className="flex text-todo mb-3">
                    <p className="mr-3">1.</p>
                    <input
                        className="shadow  border rounded w-5/6 py-1 px-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="doto1" type="text" placeholder="Do someting"
                    />
                </div>
                <div className="flex text-todo mb-2">
                    <p className="mr-3">2.</p>
                    <input
                        className="shadow  border rounded w-5/6 py-1 px-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="doto1" type="text" placeholder="Do someting"
                    />
                </div>
                <div className="py-2 mx-3">
                    <button className="btn-sy hover:bg-lime-600 text-white font-bold py-0.5 px-3 mx-4 border rounded">
                        ADD
                    </button>
                </div>


            </div>
            <div className="mb-4 mx-4 py-3 ">
                <label className="block mb-2" htmlFor="title">
                    To EXPECT
                </label>
                <div className="flex text-todo mb-3">
                    <p className="mr-3">1.</p>
                    <input
                        className="shadow  border rounded w-5/6 py-1 px-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="doto1" type="text" placeholder="Do someting"
                    />
                </div>
                <div className="flex text-todo mb-2">
                    <p className="mr-3">2.</p>
                    <input
                        className="shadow  border rounded w-5/6 py-1 px-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="doto1" type="text" placeholder="Do someting"
                    />
                </div>
                <div className="py-2 mx-3">
                    <button className="btn-sy hover:bg-lime-600 text-white font-bold py-0.5 px-3 mx-4 border rounded">
                        ADD
                    </button>
                </div>

            </div>
            <div className="mx-3 mb-1">
                <input
                    multiple
                    className="block w-2/3 text-md py-1 text-gray-900 cursor-pointer bg-gray-100 focus:outline-none"
                    id="file_input" type="file"
                />
            </div>

            {/* Save button */}
            <div className="py-4">
                <button className="bg-lime-800 w-1/3 hover:bg-lime-600 text-white font-bold py-0.5 px-3 mx-4 border rounded">
                    SAVE
                </button>
            </div>
        </div>
    )
}

export default DailyRecord