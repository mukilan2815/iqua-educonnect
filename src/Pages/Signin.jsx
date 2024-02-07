import React, { useState } from "react";
import girl from "../assets/girl.jpg";
import "../App.css";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
const Signin = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <main className="flex bgclr overflow-hidden font-sans h-screen">
        <div>
          <img
            src={girl}
            alt="girl"
            className=" hidden md:block h-screen rounded-r-3xl"
          />
        </div>
        <div className=" m-10">
          <h1 className=" font-extrabold md:text-2xl text-5xl lg:text-3xl text-blue-600">
            Login Your Account
          </h1>
          <div className="my-2 flex">
            <label className="font-bold md:text-sm lg:text-xl">
              Student ID
              <input
                type="text"
                placeholder="Your ID"
                className="lg:px-4 md:px-2 md:py-1 py-3 px-3 w-3/4  lg:py-2 rounded-lg border-none outline-none mx-2 focus:ring focus:border-blue-300 bg-gray-200"
              />
            </label>
          </div>
          <div className="my-4">
            <label className="font-bold lg:text-xl md:text-sm">
              Password
              <input
                type="password"
                placeholder="Password"
                className="lg:px-4 md:px-2 md:py-1 py-3 px-3 w-3/4  lg:py-2 rounded-lg border-none outline-none mx-2 focus:ring focus:border-blue-300 bg-gray-200"
              />
            </label>
          </div>
          <Link to="/fields" className="text-blue-600">
            <button className="getstart px-7 py-2 rounded-none  md:px-7 md:py-1 md:text-sm lg:px-12 lg:py-3 lg:text-base md:rounded-full bg-gradient-to-r text-white font-semibold shadow-md transform hover:shadow-none transition-none hover:bg-opacity-80">
              Login
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Signin;
