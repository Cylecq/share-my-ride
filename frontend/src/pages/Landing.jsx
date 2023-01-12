import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">
      <nav className="nav-landing">
        <Link to="/signup">Sign Up</Link>
        <Link to="/signup">Log In</Link>
      </nav>
      <div className="top-landing">
        <img src={logo} alt="logo" className="logo-landing" />
        <button type="button" className="buttons">
          <Link to="/look">Pick ma ride</Link>
        </button>
        <button type="button" className="buttons">
          <Link to="/rent"> Rent ma Ride</Link>
        </button>
      </div>
      <h3>A little about ourself...</h3>
      <div className="bottom-landing">
        <p>
          With Share Ma RideTM, you can rent a ride to another person for a day,
          a weekend, a month or even more. There is no local constraint, go
          biking in the mountains with the bike of someone else !
        </p>
        <button type="button" className="button">
          <Link to="/signup">Less reading and more renting !</Link>
        </button>
      </div>
    </div>
  );
}

export default Landing;
