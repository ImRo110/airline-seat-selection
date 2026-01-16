import React from "react";
import { useNavigate } from "react-router";

const LoginCard = () => {
  const navigate = useNavigate();
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="bg-blue-500 p-4 rounded shadow w-full opacity-95">
      <h1 className="text-3xl font-bold text-white">Welcome</h1>
      <p className="text-gray-300 text-sm">Please login to continue</p>

      <form onSubmit={handleLogin} className="mt-4 flex flex-col">
        <input
          type="text"
          placeholder="Username"
          className="my-2 p-2 rounded focus:border-blue-400 border-2 border-blue-200"
          required
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-2 p-2 rounded focus:border-blue-400 border-2 border-blue-200"
          required
          autoComplete="false"
        />
        <button
          type="submit"
          className="mt-6 p-2 rounded-3xl bg-amber-100 hover:bg-amber-20 cursor-pointer"
        >
          Login
        </button>
        <p className="text-center text-cyan-950 mt-2 text-xs">
          Don't have account? Sign up now!
        </p>
      </form>
    </div>
  );
};

export default LoginCard;
