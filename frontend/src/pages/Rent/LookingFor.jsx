import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./LookingFor.css";

function LookingFor() {
  return (
    <motion.div
      className="look-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
}

export default LookingFor;
