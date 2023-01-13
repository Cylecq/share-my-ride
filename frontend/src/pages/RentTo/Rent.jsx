import { motion } from "framer-motion";
import NavBar from "../../components/NavBar";
import "./Rent.css";

function Rent() {
  return (
    <motion.div
      className="rent-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <div className="main-rent">
        <h3 className="title-page">Rent ma ride</h3>
        <form action="" className="rent-form">
          <div className="label-form">
            <label htmlFor="type">Type</label>
            <input type="text" />
          </div>
          <div className="label-form">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="label-form" id="disponibility-box">
            <div className="date-label">
              <label htmlFor="start" id="disponibility-label">
                <p>Disponibility :</p>
                Start
              </label>
              <input type="date" />
            </div>
            <div className="date-label">
              <label htmlFor="end" id="end-label">
                End
              </label>
              <input type="date" />
            </div>
          </div>
          <div className="label-form">
            <label htmlFor="description">Cost per day in dollars</label>
            <input type="number" />
          </div>
          <div className="label-form">
            <label htmlFor="photo">Picture</label>
            <input type="file" className="fileinput" />
          </div>
          <div className="label-form">
            <label htmlFor="description">Ma description</label>
            <input type="text" />
          </div>
          <div className="buttonbox">
            <button type="button" className="buttons" id="signupbutton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Rent;
