import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../components/RidesCard";

const URL_BACKEND = import.meta.env.VITE_BACKEND_URL;
function ChooseCards({ name, photo, price, type }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="/makeAReservation">
        <div className="card-image">
          <img src={`${URL_BACKEND}/vehiclePicture/${photo}`} alt="{name}" />
          <div className="card-title">{name}</div>
          <div className="card-type">{type}</div>
          <div className="card-price">{price}€/day</div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ChooseCards;
