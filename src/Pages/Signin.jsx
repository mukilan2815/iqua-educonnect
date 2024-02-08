import React, { useState, useEffect } from "react";
import girl from "../assets/students.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Signin = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername");
    const savedPassword = localStorage.getItem("savedPassword");

    if (savedUsername && savedPassword && rememberPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
    }
  }, [rememberPassword]);

  const handleLogin = () => {
    console.log("logged in");
    if (rememberPassword) {
      localStorage.setItem("savedUsername", username);
      localStorage.setItem("savedPassword", password);
    }
    navigate("/fields"); // Use navigate instead of history.push
  };

  return (
    <>
      <div className="min-h-screen flex-col items-center justify-center bg-gray-100 overflow-y-hidden">
        <Navbar />
        <br />
        <div className="flex justify-center">
          <div className="bg-white p-8 z-10 hover:border-green-500 border-blue-300 border h-fit rounded shadow-md max-w-xs w-full">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <input
              type="text"
              className="p-2 mb-4 w-full border-2 focus:border-green-300 border-blue-500 focus:rounded-xl outline-none transition-all"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="p-2 mb-4 w-full border-2 focus:border-green-300 border-blue-500 focus:rounded-xl outline-none transition-all"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
              />
              <label className="text-sm">Remember Password</label>
            </div>
            <button
              className="bg-green-500 text-white p-2 w-full hover:rounded-lg hover:bg-green-600 transition-all"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>

          <img
            src={girl}
            className="hidden z-0 absolute left-0 md:block md:w-1/2 md:h-full object-cover"
            alt="Illustration"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
