import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
const Card = ({ name }) => {
  return (
    <div className="max-w-md my-5 flex bg-white shadow-md mx-auto p-6 rounded-md items-center">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      </div>
      <div className="ml-auto">
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000" }} />{" "}
      </div>
    </div>
  );
};

const Faculty = () => {
  const facultyNames = ["BioChemistry", "BioTechnology", "Chemistry"];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-screen flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h2 className="text-4xl text-green-800 font-extrabold mb-6 tracking-wide">
            Choose Faculty
          </h2>
          <div>
            {facultyNames.map((facultyName, index) => (
              <Card key={index} name={facultyName} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faculty;
