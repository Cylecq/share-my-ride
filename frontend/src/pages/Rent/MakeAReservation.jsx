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
        <p>Are you ready to become a true rider.</p>
        <Link to="/">Go home</Link>
      </div>
      <Footer />
    </div>
  );
}

export default MakeAReservation;
