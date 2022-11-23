import Gambar from "../assets/spotify-text.png"
import React from 'react';

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

  return (
        <section class="h-screen bg-white">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-max h-12 mr-2" src={Gambar} alt="logo" />
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-black">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-black">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email</label>
                            <input onChange={(e) => setUsername(e.target.value)} type="email" name="email" id="email" class="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <button disabled={username === '' || password === ''} type="submit" class="w-full text-black bg-green-100 enabled:hover:bg-white enabled:hover:text-green-100 enabled:hover:border enabled:hover:border-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-25">Sign in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Dont have an account yet? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
  );
}

export default Login;
