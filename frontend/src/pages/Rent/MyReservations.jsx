import useFetch from "../../services/useFetch";
import "../RentTo/UsersRides.css";
import NavBar from "../../components/NavBar";
import ReservationsCard from "../components/ReservationsCard";

function MyReservations() {
  const { user } = JSON.parse(localStorage.getItem("currentUser"));

  const { data: rents, loading: loadingRents } = useFetch({
    method: "get",
    path: `/rents?userId=${user.id}`,
  });

  return (
    <div className="myreservation-page">
      <NavBar />
      <h1>All my reservations</h1>
      {loadingRents && <h1>Loading...</h1>}
      <div className="list">
        {rents &&
          rents.map((rent) => (
            <ReservationsCard
              key={rent.id}
              name={rent.vehicle_name}
              type={rent.type}
              photo={rent.vehicle_photo}
              startDate={rent.start_date
                .substr(0, 10)
                .split("-")
                .reverse()
                .join("-")}
              endDate={rent.end_date
                .substr(0, 10)
                .split("-")
                .reverse()
                .join("-")}
            />
          ))}
      </div>
    </div>
  );
}

export default MyReservations;
