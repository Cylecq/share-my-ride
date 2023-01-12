import Footer from "../../components/Footer";
import "./LoginForm.css";
// import "../Landing.css";

function LoginForm() {
  return (
    <div className="login-page">
      <div>
        <h1>Log In</h1>
        <form className="loginform">
          <label>
            Ma mail
            <input type="text" name="mail" />
          </label>

          <label>
            Ma password
            <input type="text" name="password" />
          </label>
          <div className="buttonbox">
            <button type="button" className="buttons" id="loginbutton">
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
export default LoginForm;
