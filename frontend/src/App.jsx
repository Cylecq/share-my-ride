import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import UsersRides from "./pages/RentTo/UsersRides";
import MyReservations from "./pages/Rent/MyReservations";
import LookingFor from "./pages/Rent/LookingFor";
import ChooseRide from "./pages/Rent/ChooseRide";
import Rent from "./pages/RentTo/Rent";
import Modify from "./pages/RentTo/Modify";
import "./App.css";
import LoginForm from "./pages/Form/LoginForm";
import SignupForm from "./pages/Form/SignupForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/look" element={<LookingFor />} />
          <Route path="/choose/:type" element={<ChooseRide />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/marides" element={<UsersRides />} />
          <Route path="/myreservations" element={<MyReservations />} />
          <Route path="/modify" element={<Modify />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
