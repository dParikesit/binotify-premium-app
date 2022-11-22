import Gambar from "../assets/spotify-text.png"

function Register() {
  return (
        <section class="h-max overflow-y-auto bg-white">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-max h-12 mr-2" src={Gambar} alt="logo" />
            </a>
            <div class="w-full h-4/6 overflow-scroll bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-black">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-black">
                        Sign up to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Nama</label>
                            <input type="text" name="nama" id="nama" class="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="nama" required="" />
                            <p class="text-red-500 text-xs italic">Nama invalid.</p>
                        </div>
                        <div>
                            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Username</label>
                            <input type="text" name="username" id="username" class="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="username" required="" />
                            <p class="text-red-500 text-xs italic">Username invalid.</p>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Email</label>
                            <input type="email" name="email" id="email" class="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                            <p class="text-red-500 text-xs italic">Email invalid.</p>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <div>
                            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Confirm Password</label>
                            <input type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" class="bg-white border border-gray-200 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <button type="submit" class="w-full text-black bg-green-100 hover:bg-white hover:text-green-100 hover:border hover:border-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
  );
}

export default Register;
