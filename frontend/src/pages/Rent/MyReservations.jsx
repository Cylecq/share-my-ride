import useFetch from "../../services/useFetch";
import "./MyReservations.css";
import NavBar from "../../components/NavBar";
import ReservationsCard from "../components/RidesCard";

function MyReservations() {
  const { data: rents, loading: loadingRents } = useFetch({
    method: "get",
    path: `/rents?userId=1`,
  });

  // console.log(rents);

  return (
    <div className="myreservation-page">
      <NavBar />
      <h1>All my reservations</h1>
      {loadingRents && <h1>Loading...</h1>}
      <div className="cardContainer">
        {rents &&
          rents.map((rent) => (
            <ReservationsCard
              key={rent.id}
              name={rent.name}
              photo={rent.photo}
              startDate={rent.start_date}
              endDate={rent.end_date}
            />
          ))}
      </div>
    </div>
  );
}

export default MyReservations;
