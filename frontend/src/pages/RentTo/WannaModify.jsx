import { motion } from "framer-motion";
import useFetch from "../../services/useFetch";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./WannaModify.css";

const URL_BACKEND = import.meta.env.VITE_BACKEND_URL;

function WannaModify() {
  const { data: vehicles, loading } = useFetch({
    path: "/vehicles/1",
    method: "get",
  });
  return (
    <motion.div
      className="modify-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <div>
        <h3 className="title-page">Wanna modify ?</h3>
        <div className="card-modify">
          {loading && <h1>LOADING...</h1>}
          {vehicles && (
            <div className="modify-card">
              <img
                src={`${URL_BACKEND}/vehiclePicture/${vehicles.photo}`}
                alt="{name}"
              />
              <form action="">
                <div className="input-label">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder={vehicles.name} />
                </div>
                <div className="input-label">
                  <label htmlFor="name">Type</label>
                  <input type="text" placeholder={vehicles.type} />
                </div>
                <div className="input-label">
                  <label htmlFor="name">$/day</label>
                  <input type="number" placeholder={vehicles.price} />
                </div>
                <div className="input-desc">
                  <label htmlFor="name">Description</label>
                  <input type="text" placeholder={vehicles.description} />
                </div>
              </form>
              <button type="submit" className="button-modify">
                Modify
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default WannaModify;
