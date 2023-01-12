import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./LookingFor.css";

function LookingFor() {
  return (
    <div className="look-page">
      <NavBar />
      <div className="main-look">
        <h1 className="title-page">What are ya looking for ?</h1>
        <Link to="/choose/bike" className="link-button-look">
          <button type="button" className="button-look">
            A bike
          </button>
        </Link>
        <Link to="/choose/trot" className="link-button-look">
          <button type="button" className="button-look">
            A trot'
          </button>
        </Link>
        <Link to="/choose/skate" className="link-button-look">
          <button type="button" className="button-look">
            A skate
          </button>
        </Link>
        <Link to="/choose/roller" className="link-button-look">
          <button type="button" className="button-look">
            Some rollers
          </button>
        </Link>
        <Link to="/choose/other" className="link-button-look">
          <button type="button" className="button-look">
            Surprise me ma man
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default LookingFor;
