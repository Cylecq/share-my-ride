import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetchLazy from "../../services/useFetchLazy";
import Footer from "../../components/Footer";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const mailRef = useRef();
  const passwordRef = useRef();

  const {
    trigger,
    data: currentUser,
    error,
  } = useFetchLazy({
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
    if (!currentUser) return;
    if (currentUser?.user.is_admin) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate("/admin");
    }
    if (!currentUser?.user.is_admin) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate("/look");
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
            <input type="password" name="password" ref={passwordRef} />
          </label>
          <div className="buttonbox">
            <button type="submit" className="buttons" id="loginbutton">
              Submit
            </button>
          </div>
          {error?.response?.status === 400 && (
            <p className="error-message">Fill the form</p>
          )}
          {error?.response?.status === 401 && (
            <p className="error-message">Wrong login</p>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
}
export default LoginForm;
