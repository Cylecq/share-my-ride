import useFetch from "../../services/useFetch";
import NavBar from "../../components/NavBar";
// import Footer from "../../components/Footer";
import RidesCard from "../components/RidesCard";

function UsersRides() {
  const { data: vehicles, loading } = useFetch({
    path: "/vehicles?ownerId=1",
    method: "get",
  });
  return (
    <div className="myreservation-page">
      <NavBar />
      <div className="main-myreservation">
        <h3 className="title-page">All ma rides</h3>
        <div className="vehicle-list">
          {loading && <div>LOADING...</div>}
          {vehicles &&
            vehicles.map((vehicle) => (
              <RidesCard
                key={vehicle.id}
                id={vehicle.id}
                name={vehicle.name}
                type={vehicle.type}
                price={vehicle.price}
                photo={vehicle.photo}
              />
            ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default UsersRides;
