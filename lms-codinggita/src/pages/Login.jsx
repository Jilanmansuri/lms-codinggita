import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { loginDetails } from "../utils/auth";

function Login() {

    const navigate = useNavigate();
    const [role, setRole] = useState("Student");
    const [uid, setUid] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        const isLogin = loginDetails(uid, password);
        if (isLogin) {
            navigate("/dashboard");
        } else {
            alert("Invalid UID or Password");
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 text-white">

            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-md shadow-xl">

                <div className="p-6 pb-2 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-white">
                        Welcome Back
                    </h2>
                    <p className="text-sm text-gray-400">Sign in to your account</p>
                </div>

                <div className="p-6 pt-2">
                    <form className="space-y-5" onSubmit={handleSubmit}>

                        {/* Role */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-200">
                                Role
                            </label>

                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setRole("Student")}
                                    className={`px-3 py-2 rounded-md border text-sm
                                           ${role === "Student"
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-gray-300 border-white/10 hover:bg-white/5"}`}
                                >
                                    Student
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setRole("Mentor")}
                                    className={`px-3 py-2 rounded-md border text-sm
                                           ${role === "Mentor"
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-gray-300 border-white/10 hover:bg-white/5"}`}
                                >
                                    Mentor
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setRole("Admin")}
                                    className={`px-3 py-2 rounded-md border text-sm
                                           ${role === "Admin"
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-gray-300 border-white/10 hover:bg-white/5"}`}
                                >
                                    Admin
                                </button>
                            </div>
                        </div>

                        {/* University UID */}
                        <div className="space-y-2">
                            <label
                                htmlFor="UniversityUID"
                                className="text-sm font-medium text-gray-200"
                            >
                                University UID
                            </label>

                            <input
                                value={uid}
                                onChange={(e) => setUid(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-gray-400 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                                id="UniversityUID"
                                placeholder="Enter your University UID"
                                autoComplete="username"
                                required
                                type="text"
                                name="UniversityUID"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-gray-200"
                            >
                                Password
                            </label>

                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-gray-400 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                                id="password"
                                placeholder="••••••••"
                                autoComplete="current-password"
                                required
                                type="password"
                                name="password"
                            />
                        </div>

                        {/* Button */}
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 h-10 px-4 py-2 w-full"
                            type="submit"
                        >
                            Sign in
                        </button>

                        <p className="text-center text-xs text-gray-400">
                            Use your role-based credentials. Contact admin if you need help.
                        </p>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;