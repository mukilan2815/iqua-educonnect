import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { UserProvider } from "./newContext";
import Signin from "./Pages/Signin";
import Field from "./Pages/Fields";
import Program from "./Pages/Program";
import Subject from "./Pages/Subject";
import Topics from "./Pages/Topics";
import Year from "./Pages/Year";
import Faculty from "./Pages/Faculty";
import VideoPage from "./Pages/Videopage";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/fields" element={<Field />} />
          <Route path="/program" element={<Program />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/year" element={<Year />} />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
