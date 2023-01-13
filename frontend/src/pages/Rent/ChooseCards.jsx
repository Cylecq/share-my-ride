import { Link } from "react-router-dom";
import "../components/RidesCard";

const URL_BACKEND = import.meta.env.VITE_BACKEND_URL;
function ChooseCards({ name, photo, price, type }) {
  return (
    <div className="card">
      <Link to="/makeAReservation">
        <div className="card-image">
          <img src={`${URL_BACKEND}/vehiclePicture/${photo}`} alt="{name}" />
          <div className="card-title">{name}</div>
          <div className="card-type">{type}</div>
          <div className="card-price">{price}€/day</div>
        </div>
      </Link>
    </div>
  );
}

export default ChooseCards;
