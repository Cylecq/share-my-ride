import "./RidesCard.css";

const URL_BACKEND = import.meta.env.VITE_BACKEND_URL;

function RidesCard({ name, photo, price, type }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`${URL_BACKEND}/vehiclePicture/${photo}`} alt="{name}" />
        <div className="card-title">{name}</div>
        <div className="card-type">{type}</div>
        <div className="card-price">{price}€/day</div>
      </div>
    </div>
  );
}

export default RidesCard;
