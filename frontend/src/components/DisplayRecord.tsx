"use client"
import React, { useState } from "react"

// import css
import "@/styles/daily.css"


const DisPlayRecord = () => {
    return (

        <div className="px-2 f-cs mx-3 mb-3">
            <div className="mb-1 flex justify-between">
                <h1>LAST RECORD</h1>
                {/* input date */}
                <div className="">
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-zinc-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md sm:text-sm"
                    />
                </div>
            </div>

            {/* TITLE */}
            <div className="">
                <div className="record-header py-3">
                    <h2>TITLE</h2>
                </div>

                <div className="detail">
                    <p>
                        Welcome to our cutting-edge tool, the Random Sentence Generator
                    </p>
                </div>
            </div>

            {/* TODO LISTS */}
            <div className="py-7">
                <div className="record-header">
                    <h2>TODO LIST</h2>
                </div>
                <div className="detail">
                    <p>1. Welcome to our cutting-edge tool, the Random Sentence Generator</p>
                    <p>2. Welcome to our cutting-edge tool, the Random Sentence Generator</p>
                    <p>3. Welcome to our cutting-edge tool, the Random Sentence Generator</p>
                </div>
            </div>

            {/* TO EXPECTS */}
            <div className="py-2">
                <div className="record-header">
                    <h2>TO EXPECTS</h2>
                </div>
                <div className="detail">
                    <p>1. Welcome to our cutting-edge tool, the Random Sentence Generator</p>
                    <p>2. Welcome to our cutting-edge tool, the Random Sentence Generator</p>
                    <p>3. Welcome to our cutting-edge tool, the Random Sentence Generator</p>
                </div>
            </div>

            {/* FILES */}
            <div className="py-3">

            </div>
            <div className="py-5">
                <div className="flex justify-between">
                    <div className="">
                        <button className="bg-violet-500 hover:bg-gray-400 text-gray-100 font-bold py-1 px-4 rounded">
                            ALL RECORDS
                        </button>
                    </div>
                    <div className="">
                        <button className="bg-green-900 hover:bg-gray-400 text-gray-100 font-bold py-1 px-4 mr-5 rounded-l">
                            Prev
                        </button>
                        <button className="bg-orange-800 hover:bg-gray-400 text-gray-100 font-bold py-1 px-4 rounded-r">
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DisPlayRecord