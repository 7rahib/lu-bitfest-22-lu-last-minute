import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import Registartion from "./Pages/Home/Registartion";
import BusInventory from "./Pages/BusInventory/BusInventory";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registartion />} />
          <Route path="/businventory" element={<BusInventory />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
