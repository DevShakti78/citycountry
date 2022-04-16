import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import { AddCountry } from "./Components/AddCountry";
import { AddCity } from "./Components/AddCity";

function App() {
  return (
    <div className="App">
      <Link to="/"><h3>Home</h3></Link> <br />
      <Link to="/add-country"><h4>AddCountry</h4></Link> <br /> <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<AddCountry />} />
        <Route path="/add-city" element={<AddCity />} />
      </Routes>
    </div>
  );
}

export default App;