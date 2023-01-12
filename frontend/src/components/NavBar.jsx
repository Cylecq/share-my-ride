import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <BurgerMenu />
      <Link to="/">Log Out</Link>
    </nav>
  );
}

export default NavBar;
