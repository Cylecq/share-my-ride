import { Link } from "react-router-dom";
import useFetch from "../../services/useFetch";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RidesCard from "../components/RidesCard";
import "./UsersRides.css";

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
        {loading && <h1>LOADING...</h1>}
        <div className="list">
          {vehicles &&
            vehicles.map((vehicle) => (
              <Link to="/modify">
                <RidesCard
                  key={vehicle.id}
                  id={vehicle.id}
                  name={vehicle.name}
                  type={vehicle.type}
                  price={vehicle.price}
                  photo={vehicle.photo}
                />
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UsersRides;
