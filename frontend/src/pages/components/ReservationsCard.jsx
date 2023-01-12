import "./RidesCard.css";

const URL_BACKEND = import.meta.env.VITE_BACKEND_URL;

function ReservationsCard({ name, photo, type, startDate, endDate }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`${URL_BACKEND}/vehiclePicture/${photo}`} alt="{name}" />
        <div className="card-title">
          {name} - {type}
        </div>
        <div className="card-date">
          {startDate} / {endDate}
        </div>
      </div>
    </div>
  );
}

export default ReservationsCard;
