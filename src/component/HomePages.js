import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Buyy } from "./Pages/Buyy";
import LandingPage from "./Pages/LandingPage";
import List from "./Pages/List";
import MyAgent from "./Pages/MyAgent";
import MyList from "./Pages/MyList";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/buy" element={<Buyy />} />
        <Route path="/list" element={<List />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/myagent" element={<MyAgent />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default HomePages;
