import { useEffect, useRef } from "react";
import useFetchLazy from "../../services/useFetchLazy";
import Footer from "../../components/Footer";
import "./LoginForm.css";

function LoginForm() {
  const mailRef = useRef();
  const passwordRef = useRef();

  const { trigger, data: currentUser } = useFetchLazy({
    method: "post",
    path: "/users/login",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await trigger({
      email: mailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <div className="login-page">
      <div>
        <h1>Log In</h1>
        <form className="loginform" onSubmit={handleSubmit}>
          <label htmlFor="mail">
            Ma mail
            <input type="text" name="mail" ref={mailRef} />
          </label>

          <label htmlFor="password">
            Ma password
            <input type="text" name="password" ref={passwordRef} />
          </label>
          <div className="buttonbox">
            <button type="submit" className="buttons" id="loginbutton">
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
