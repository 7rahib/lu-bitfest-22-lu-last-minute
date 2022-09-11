import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import Registartion from "./Pages/Home/Registartion";
import BusInventory from "./Pages/Dashboard/BusInventory";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RouteList from "./Pages/Dashboard/RouteList";
import AddBusInventory from "./Pages/Dashboard/AddBusInventory";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registartion />} />
          <Route path="/businventory" element={<BusInventory />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<BusInventory></BusInventory>}></Route>
            <Route path='addbus' element={<AddBusInventory></AddBusInventory>}></Route>
            <Route path='route' element={<RouteList></RouteList>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div >
  );
}

export default App;
