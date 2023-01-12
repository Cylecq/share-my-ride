import React from "react";

function Form() {
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
          <input type="text" name="zip code" />
        </label>

        <label>
          Ma phone number
          <input type="text" name="phone" />
        </label>

        <label className="picture">
          Ma picture
          <input type="file" name="picture" />
        </label>

        <label>
          Ma ID card
          <input type="file" name="idcard" />
        </label>
      </form>
      <div className="button">
        <button type="button">Submit</button>
      </div>
    </div>
  );
}

export default Form;
