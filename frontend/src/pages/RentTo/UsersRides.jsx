import { motion } from "framer-motion";
import useFetch from "../../services/useFetch";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RidesCard from "../components/RidesCard";
import "./UsersRides.css";

function UsersRides() {
  const { user } = JSON.parse(localStorage.getItem("currentUser"));

  const { data: vehicles, loading } = useFetch({
    path: `/vehicles?ownerId=${user.id}`,
    method: "get",
  });
  return (
    <motion.div
      className="myreservation-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <motion.div className="main-myreservation">
        <h3 className="title-page">All ma rides</h3>
        {loading && <h1>LOADING...</h1>}
        <div className="list">
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
      </motion.div>
      <Footer />
    </motion.div>
  );
}

export default UsersRides;
