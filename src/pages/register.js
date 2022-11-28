import Gambar from "../assets/spotify-text.png"
import {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('_');
    const [email, setEmail] = useState('a@a.com');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isSamePassword, setIsSamePassword] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/register', {
            name: name,
            username: username,
            email: email,
            password: password,
            confirm_password: confirm_password
        })
        .then((response) => {
            window.location.href = "/";
            navigate("/")
        }).catch((error) => {
            alert(error.response.data.message);
        });
    }

    useEffect(() => {
        if (/^\w+$/.test(username)) {
            setIsValidUsername(true);
        } else {
            setIsValidUsername(false);
        }
        if (String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }

        if (password === confirm_password) {
            setIsSamePassword(true);
        } else {
            setIsSamePassword(false);
        }
    }, [username, email, password, confirm_password]);
    return (
        <section className="h-max overflow-y-auto bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-max h-12 mr-2" src={Gambar} alt="logo" />
            </a>
            <div className="w-full h-4/6 overflow-scroll bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-black">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-black">
                        Sign up to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Name</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name" required="" />
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div>
                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" className="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="username" required="" />
                            {!isValidUsername && <p className="text-red text-xs italic">Username invalid.</p>}
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                            {!isValidEmail && <p className="text-red text-xs italic">Email invalid.</p>}
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="" className="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <div>
                            <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Confirm Password</label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirm_password" id="confirm_password" placeholder="" className="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            {!isSamePassword && <p className="text-red text-xs italic">Password is not same.</p>}
                        </div>
                        <button disabled={(!isSamePassword || !isValidEmail || !isValidUsername) || password === '' || email === '' || name === '' || username === ''} type="submit" className="w-full text-black bg-green-100 enabled:hover:bg-white enabled:hover:text-green-100 enabled:hover:border enabled:hover:border-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-25" onClick={onSubmit}>Sign up</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
  );
}

export default Register;
