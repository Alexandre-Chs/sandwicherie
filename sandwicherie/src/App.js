import "./App.css";
import Home from "./component/Home";
import Command from "./component/Command";
import LoginPage from "./component/restaurant/LoginPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="restaurant" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="command" element={<Command />} />
      </Routes>
    </div>
  );
}

export default App;
