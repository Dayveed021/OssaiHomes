import React from "react";
import "../../styles/List.scss";
import { Navbar } from "../Navbar";
import { Footer } from "./Footer";

const List = () => {
  return (
    <div>
      <Navbar />
      <div className="listpage">List</div>
      <Footer />
    </div>
  );
};

export default List;
