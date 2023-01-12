import { useParams } from "react-router-dom";
import useFetch from "../../services/useFetch";
import NavBar from "../../components/NavBar";
import RidesCard from "../components/RidesCard";

import "./ChooseRide.css";

function ChooseRide() {
  const { type } = useParams();

  const {
    data: vehicles,
    loading: loadingVehicles,
    error: errorVehicles,
  } = useFetch({
    method: "get",
    path: `/vehicles?type=${type}`,
  });

  return (
    <div className="chooseRide">
      <NavBar />
      <h1>Choose a {type}</h1>
      {loadingVehicles && <h1>Loading...</h1>}
      {errorVehicles && <h1>Something went wrong</h1>}
      <div className="list">
        {vehicles &&
          vehicles.map((vehicle) => (
            <RidesCard
              key={vehicle.id}
              name={vehicle.name}
              photo={vehicle.photo}
              price={vehicle.bike}
            />
          ))}
      </div>
    </div>
  );
}

export default ChooseRide;
