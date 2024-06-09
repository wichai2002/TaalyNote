import Link from 'next/link';
import dateUtils from "../../../utils/date.ts"
import "../../../styles/authen.css";
import React, { useState } from 'react';
import authenAPI from '../../../api/authen/authenAPI';
import { useRouter } from 'next/router'

const RegisterPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [date_of_birth, setDateOfBirth] = useState('')
    const [position, setPosition] = useState('')
    const [profile, setProfile] = useState('')


    async function handleRegister() {
        const {register} = authenAPI();
        const router = useRouter();

        try{

            const payload = {
                username: username,
                password: password,
                first_name: first_name,
                last_name: last_name,
                email: email,
                date_of_birth: new Date(date_of_birth),
                position: position,
                profile: profile
            }

            const response = await register(payload)

            if (response.status == 201){
                router.push('/login')

            }else{
                throw new Error("Register faild.")
            }

        }catch (error) {
            console.error(error)
        }
    }
    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-5">
            <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md py-4">
                <h1 className="text-4xl font-bold text-center mb-8" style={{ fontFamily: 'serif', color: '#5B4636' }}>
                    TAALY NOTE
                </h1>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                            username
                        </label>

                        <input
                            name="username"
                            type="text"
                            required
                            maxLength={150}
                            minLength={6}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                            password
                        </label>

                        <input
                            name="password"
                            type="password"
                            required
                            maxLength={150}
                            minLength={8}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />

                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                            e-mail
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
                            first name
                        </label>
                        <input

                            name="firstName"
                            type="text"
                            required
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
                            last name
                        </label>
                        <input
                            name="lastName"
                            type="text"
                            required
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="dob" className="block text-lg font-medium text-gray-700">
                            date of birth
                        </label>
                        <input
                            name="dob"
                            type="date"
                            required
                            value={date_of_birth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="position" className="block text-lg font-medium text-gray-700">
                            position
                        </label>
                        <input
                            id="position"
                            name="position"
                            type="text"
                            required
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="profile" className="block text-lg font-medium text-gray-700">
                            your profile (optional)
                        </label>
                        <input
                            id="profile"
                            name="profile"
                            type="file"
                            value={profile}
                            onChange={(e) => setProfile(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
