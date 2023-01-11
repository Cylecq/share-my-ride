import { useNavigate } from "react";
import "./Landing.css";
import NavBar from "../components/NavBar";

function Landing() {
  const navigate = useNavigate();

  const handleToLookingFor = () => {
    navigate("/looking-for");
  };

  const handleToRent = () => {
    navigate("/rent");
  };

  return (
    <div className="landing-page">
      <NavBar />
      <img src="../assets/logo.png" alt="" />
      <button type="button" onClick={handleToLookingFor()}>
        Pick ma ride
      </button>
      <button type="button" onClick={handleToRent()}>
        Rent a ride
      </button>
    </div>
  );
}

export default Landing;
