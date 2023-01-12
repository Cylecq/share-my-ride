import Footer from "../../components/Footer";
import "./SignupForm.css";

function SignupForm() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form encType="multipart/form-data" className="signupform">
        <label>
          Ma firstname
          <input type="text" name="firstname" />
        </label>
        <label>
          Ma lastname
          <input type="text" name="lastname" />
        </label>
        <label>
          Ma password
          <input type="text" name="password" />
        </label>
        <label>
          Ma mail
          <input type="text" name="mail" />
        </label>
        <label>
          Ma address
          <input type="text" name="address" />
        </label>
        <label>
          Ma city
          <input type="text" name="city" />
        </label>
        <label>
          Ma zip code
          <input type="text" name="zip" />
        </label>
        <label>
          Ma phone number
          <input type="text" name="phone" />
        </label>
        <label className="picture" htmlFor="fileinput">
          Ma picture
          <input type="file" name="picture" className="fileinput" />
        </label>
        <div className="buttonbox">
          <button type="button" className="buttons" id="signupbutton">
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default SignupForm;
