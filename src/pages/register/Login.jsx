import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn,signOut } from "../../redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const users = useSelector((s) => s.user.value);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    let existUser = users.find((item) => item.username === user.username);

    if (existUser) {
      if (existUser.password === user.password) {
        dispatch(signIn("testToken"))
        navigate("/admin")
      } else {
        alert("Username or password invalid");
      }
    } else {
      alert("Username or password invalid");
    }
  };

  console.log(users);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Login
        </h2>
        <p className="text-center text-gray-600 mb-6">Login your account!</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            type="text"
            required
            name="username"
          />
          <input
            className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            type="password"
            required
            name="password"
          />
          <button className="text-xl font-semibold bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account yet?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
