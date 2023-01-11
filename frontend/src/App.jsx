import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import UsersRides from "./pages/UsersRides";
import LookingFor from "./pages/Rent/LookingFor";
import ChooseRide from "./pages/Rent/ChooseRide";
import Rent from "./pages/RentTo/Rent";
import Modify from "./pages/RentTo/Modify";
import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/look" element={<LookingFor />} />
          <Route path="/choose" element={<ChooseRide />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/myrides" element={<UsersRides />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/myreservasion" element={<UsersRides />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
