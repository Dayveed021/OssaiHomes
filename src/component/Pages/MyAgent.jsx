import React from "react";
import "../../styles/MyAgent.scss";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

const MyAgent = () => {
  return (
    <div>
      <Navbar />
      <div className="MyAgentpage">MyAgent</div>
      <Footer />
    </div>
  );
};

export default MyAgent;
