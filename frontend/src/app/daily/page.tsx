"use client";
import React, { useState } from "react";
import Navbar from "@/components/NavBar";

// css import
import "@/styles/daily.css"
import DailyRecord from "@/components/DailiyRecord";
import DisPlayRecord from "@/components/DisplayRecord";


const DailyPage = () => {

    return (
        <div className="">

            {/* Use nav bar component */}
            <Navbar />

            <div className="text-style py-4 ">
                <div className="grid grid-cols-1 lg:grid-cols-2  mx-4 px-2 lg:mx-7 lg:px-2 py-5 ">

                    {/* components record todo list */}
                    <DailyRecord />

                    {/* component show last record and all */}

                    <DisPlayRecord />


                </div>
            </div>
        </div>
    )
}


export default DailyPage