import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./MakeAReservation.css";

function MakeAReservation() {
  return (
    <div className="makeAReservtation">
      <NavBar />
      <h3 className="title-page">Ma man might contact you</h3>
      <div className="main-make-a">
        <div className="make-text">
          <p>
            Are you ready to become <br />a true rider ?
          </p>
          <p>Make sure to ride safe first !</p>
          <p>Don't get hurt like the capitalism got you hurt .</p>
        </div>
        <Link to="/">Go home</Link>
      </div>
      <Footer />
    </div>
  );
}

export default MakeAReservation;
