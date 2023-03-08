import Register from "./register";
import Home from './Home';
import "../Styles/index.css";
import { Routes, Route } from "react-router-dom";
import PersonalDetails from "./personalDetails";
import SuperNavbar from "./SuperNavbar";
import Passengers from "./Passengers";
import EditPassenger from "./EditPassenger";
import ViewPassenger from "./ViewPassenger";
import Bookings from "./Bookings";
import { useState } from "react";

const App = () => {

  const [color, setColor] = useState("white");
  return (
    <div className="App" style={{ background: color }}>
      <SuperNavbar/>
      <Routes>
        <Route element={<Home setColor={setColor}/>} path="/"/>
        <Route element={<Register/>} path="/basic"/>
        <Route element={<PersonalDetails/>} path="/personal"/>
        <Route element={<Passengers/>} path="/passengers"/>
        <Route element={<Bookings/>} path="/bookings"/>
        <Route element={<EditPassenger/>} path="/passengers/edit/:id"/>
        <Route element={<ViewPassenger/>} path="/passengers/view/:serialNo"/>
      </Routes>
    </div>
  );
};

export default App;
