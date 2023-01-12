import NavBar from "../../components/NavBar";
import "./Rent.css";

function Rent() {
  return (
    <div className="rent-page">
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
          <div className="label-form">
            <p>Disponibility</p>
            <label htmlFor="start">Start</label>
            <input type="date" />
            <label htmlFor="end">End</label>
            <input type="date" />
          </div>
          <div className="label-form">
            <label htmlFor="photo">Picture</label>
            <input type="file" />
          </div>
          <div className="label-form">
            <label htmlFor="description">Ma description</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Rent;
