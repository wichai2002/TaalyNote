"use client";
import Link from 'next/link';
import "../../../styles/authen.css"
import React, {use, useState} from 'react';
import authenAPI from '../../../api/authen/authenAPI';

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        const { login } = authenAPI()
        const payload = {
            username,
            password
        }

        const response = login(payload)
        console.log(response);
    }

    return (
        <div className="container mx-auto flex justify-center ">
            <div className="grid grid-cols-1 flex w-2/5 mt-24">
                <div className="py-4 sm:mx-5 title-authen">
                    <h1>TAALY NOTE</h1>
                </div>
                
                <div className="mx-4">
                    <div className="mb-4 py-2">
                        <label className="block text-gray-700 label-authen mb-2" htmlFor="username">
                            username
                        </label>
                        <input 
                            required
                            maxLength={150}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none label-authen  border  rounded-md w-full lg:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="username" 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 label-authen mb-2" htmlFor="password">
                            password
                        </label>
                        <input 
                            required
                            maxLength={150}
                            minLength={6}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none label-authen border rounded-md w-full lg:py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************" 
                        />
                        {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
                    </div>
                    <div className="lg:flex lg:items-center lg:justify-between mb-3">
                        <button 
                            onClick={handleLogin}
                            className="btn-color hover:bg-stone-700 text-white font-bold py-1 px-4 lg:px-7 rounded-md focus:outline-none focus:shadow-outline" type="button"
                        >
                            Sign In
                        </button>

                        <a className="lg:inline-block block py-2 lg:py-0 align-baseline text-underline authen_frnot-size hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>

                    </div>
                    <div className=" authen_frnot-size lg:py-4 lg:flex">
                        <h1>You have no account Taaly</h1>
                        <Link href="/authen/register" className='text-underline mx-2 lg:mx-3'><h1>REGISTER.</h1></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
