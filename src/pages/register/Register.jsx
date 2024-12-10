import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/slices/user-slice";
import { v4 as uuidv4 } from "uuid";


const Register = () => {
  const user = useSelector((s) => s.user.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    let newUser = { ...Object.fromEntries(formData), id: uuidv4() };

    if(user.findIndex(item=>item.username===newUser.username)>=0){
      return alert("username already exist")
    }
    dispatch(addUser(newUser))
    e.target.reset()
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Register
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create your account to get started!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            type="text"
            required
            name="name"
          />
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
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
