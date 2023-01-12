import NavBar from "../../components/NavBar";
import "./LookingFor.css";

function LookingFor() {
  return (
    <div className="look-page">
      <NavBar />
      <div className="main-look">
        <h1 className="title-page">What are ya looking for ?</h1>
        <button type="button" className="button-look">
          A bike ma man
        </button>
        <button type="button" className="button-look">
          A trot' ma man
        </button>
        <button type="button" className="button-look">
          A skate ma man
        </button>
        <button type="button" className="button-look">
          Some rollers ma man
        </button>
        <button type="button" className="button-look">
          Surprise me ma man
        </button>
      </div>
    </div>
  );
}

export default LookingFor;
