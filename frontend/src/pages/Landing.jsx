import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import "./Landing.css";

function Landing() {
  let path1 = "";
  let path2 = "";

  if (localStorage.getItem("currentUser")) {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user.token) {
      path1 = "/look";
      path2 = "/rent";
    }
  } else {
    path1 = "/login";
    path2 = "/login";
  }

  return (
    <div className="landing-page">
      <nav className="nav-landing">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </nav>
      <div className="top-landing">
        <img src={logo} alt="logo" className="logo-landing" />
        <button type="button" className="buttons">
          <Link to={path1}>Pick ma ride</Link>
        </button>
        <button type="button" className="buttons">
          <Link to={path2}> Rent ma Ride</Link>
        </button>
      </div>
      <h3 className="title-page" id="title-bottomlanding">
        A little about ourself...
      </h3>
      <div className="bottom-landing">
        <p>
          With Share Ma RideTM, you can rent a ride to another person for a day,
          a weekend, a month or even more. There is no local constraint, go
          biking in the mountains with the bike of someone else !
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
