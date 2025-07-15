import React, { useState } from 'react';

const Login = ({handleLogin}) => {

    const [showPassword, setShowPassword] = useState(false);
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(Email,Password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
            <div className="bg-gray-900  shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_0_20px_rgba(255,255,255,0.5)] w-[500px] h-[450px] sm:h-[600px] text-white p-8 rounded-lg ">
                <h2 className="text-2xl font-bold mb-20 sm:mb-40">Log In</h2>

                <form onSubmit={(e) => { submitHandler(e) }}>
                    <div className="mb-4 relative">
                        <input
                            required
                            value={Email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="email"
                            placeholder="Email"
                            className="w-full px-10 py-2 rounded-full border border-red-400 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <span className="absolute left-3 top-2.5 text-red-400">📧</span>
                    </div>

                    <div className="mb-4 relative">
                        <input
                            required
                            value={Password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full px-10 py-2 rounded-full border border-red-400 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute right-3 top-2.5 text-sm text-white"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                        <span className="absolute left-3 top-2.5 text-red-400">🔒</span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-full font-semibold transition-all duration-200 mt-5"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
