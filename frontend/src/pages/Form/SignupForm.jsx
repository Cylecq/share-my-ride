import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useFetchLazy from "../../services/useFetchLazy";
import Footer from "../../components/Footer";
import "./SignupForm.css";

function SignupForm() {
  const navigate = useNavigate();

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const passwordRef = useRef();
  const mailRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const phoneRef = useRef();

  const {
    trigger,
    data: newUser,
    error,
  } = useFetchLazy({
    method: "post",
    path: "/users/",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await trigger({
      firstName: firstnameRef.current.value,
      lastName: lastnameRef.current.value,
      password: passwordRef.current.value,
      email: mailRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      postalCode: zipRef.current.value,
      phoneNumber: phoneRef.current.value,
    });
  };

  useEffect(() => {
    if (newUser) {
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      navigate("/look");
    }
  }, [newUser]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Sign Up</h1>
      {error?.response?.status === 401 && (
        <p className="error-message">Fill all the fields</p>
      )}
      <form
        encType="multipart/form-data"
        className="signupform"
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstname">
          Ma firstname
          <input type="text" name="firstname" ref={firstnameRef} />
        </label>
        <label htmlFor="lastname">
          Ma lastname
          <input type="text" name="lastname" ref={lastnameRef} />
        </label>
        <label htmlFor="password">
          Ma password
          <input type="password" name="password" ref={passwordRef} />
        </label>
        <label htmlFor="mail">
          Ma mail
          <input type="text" name="mail" ref={mailRef} />
        </label>
        <label htmlFor="address">
          Ma address
          <input type="text" name="address" ref={addressRef} />
        </label>
        <label htmlFor="city">
          Ma city
          <input type="text" name="city" ref={cityRef} />
        </label>
        <label htmlFor="zip">
          Ma zip code
          <input type="text" name="zip" ref={zipRef} />
        </label>
        <label htmlFor="phone">
          Ma phone number
          <input type="text" name="phone" ref={phoneRef} />
        </label>
        <div className="buttonbox">
          <button type="submit" className="buttons" id="signupbutton">
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </motion.div>
  );
}

export default SignupForm;
