import React from "react";
import "../styles/Home.css";
import CreditForm from "../components/CreditForm";
import RearCard from "../components/RearCard";
const Home = () => {
  return (
    <div className="home">
      <div className="left-box">

      </div>
      <RearCard />
      <div className="form-box">
        <CreditForm />
      </div>
    </div>
  );
};

export default Home;
