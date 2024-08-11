import Main from "./pages/Main";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import Pastry from "./pages/Pastry";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CakeMenu from "./components/CakeMenu";
import TieredCakes from "./pages/TieredCakes";
import Drinks from "./pages/Drinks";
import SavouryPastry from "./pages/SavouryPastry";
import SweetPastry from "./pages/SweetPastry";
import AddOns from "./pages/AddOns";
import CartDetails from "./pages/CartDetails";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cakes" element={<Cakes />} />
        <Route exact path="/pastry" element={<Pastry />} />
        <Route exact path="/sweetpastry" element={<SweetPastry />} />
        <Route exact path="/savourypastry" element={<SavouryPastry />} />
        <Route exact path="/tieredcakes" element={<TieredCakes />} />
        <Route exact path="/cart-details" element={<CartDetails />} />
        <Route exact path="/drinks" element={<Drinks />} />
        <Route exact path="/addons" element={<AddOns />} />
        <Route exact path="/displaycakes" element={<CakeMenu />} />
      </Routes>
    </Router>
  );
}
export default App;
