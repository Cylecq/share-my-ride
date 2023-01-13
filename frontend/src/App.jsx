import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
