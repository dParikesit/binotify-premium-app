import Gambar from "../assets/spotify-text.png"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/api/login', {
            username: username,
            password: password
        })
        .then((response) => {
            Cookies.set('access_token', response.data.accessToken);
            Cookies.set('isAdmin', response.data.isAdmin);
            Cookies.set('id', response.data.id);
            Cookies.set('username', response.data.username);
            window.location.href = "/kelola-lagu";
            navigate("/kelola-lagu");
        }).catch((error) => {
            alert(error.response.data.message);
        });
    };

    return (
        <section className="h-screen bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-max h-12 mr-2" src={Gambar} alt="logo" />
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-black">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-black">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} type="username" name="username" id="username" className="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="username" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <button disabled={username === '' || password === ''} type="submit" className="w-full text-black bg-green-100 enabled:hover:bg-white enabled:hover:text-green-100 enabled:hover:border enabled:hover:border-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-25" onClick={onSubmit}>Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Dont have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Login;
