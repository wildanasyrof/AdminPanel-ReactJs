import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/"); 
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-6 rounded shadow-md" onSubmit={handleLogin}>
                <h2 className="text-2xl mb-4">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full mb-3 p-2 border rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
