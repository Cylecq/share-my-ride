import React from "react";

function LoginForm() {
  return (
    <div>
      <h1>Log In</h1>
      <form encType="multipart/form-data" className="loginform">
        <label>
          Ma mail
          <input type="text" name="mail" />
        </label>

        <label>
          Ma password
          <input type="text" name="password" />
        </label>
      </form>
      <div className="button">
        <button type="button">Submit</button>
      </div>
    </div>
  );
}
export default LoginForm;
