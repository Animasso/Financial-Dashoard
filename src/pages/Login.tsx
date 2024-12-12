import { FormEvent, useState } from "react";

const Login = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    function handleSubmitLogin(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log("Formulaire de connexion soumis");
    }

    function handleSubmitRegister(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log("Formulaire d'inscription soumis");
    }

    return (
        <div className="bg-gray-100">
            <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                <h1 className=" text-center mb-9  text-3xl bg">My Financial Dashboard</h1>

                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-800 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
                    ></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h2 className="text-2xl font-semibold">
                                    {isLogin ? "Login" : "Register"}
                                </h2>
                            </div>

                            <div className="divide-y divide-gray-200">
                                {/* Login */}
                                {isLogin && (
                                    <form onSubmit={handleSubmitLogin}>
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                    placeholder="Name"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Name
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="lastname"
                                                    name="lastname"
                                                    type="text"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                    placeholder="Lastname"
                                                />
                                                <label
                                                    htmlFor="lastname"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Lastname
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                    placeholder="Password"
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Password
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <button className="bg-cyan-500 text-white w-full rounded-md px-2 py-1 hover:bg-blue-300">
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* Register */}
                                {!isLogin && (
                                    <form onSubmit={handleSubmitRegister}>
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                    placeholder="Name"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Name
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="lastname"
                                                    name="lastname"
                                                    type="text"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                    placeholder="Lastname"
                                                />
                                                <label
                                                    htmlFor="lastname"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Lastname
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                    placeholder="Email"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Email
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    autoComplete="off"
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                    placeholder="Password"
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                >
                                                    Password
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <button className="bg-cyan-500 text-white w-full rounded-md px-2 py-1 hover:bg-blue-300">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                <div className="relative mt-4">
                                    <button
                                        onClick={() => setIsLogin(!isLogin)}
                                        className="text-cyan-500 hover:text-blue-300"
                                    >
                                        {isLogin
                                            ? "You do not have an account? Register"
                                            : "Already have an account?Log in"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
