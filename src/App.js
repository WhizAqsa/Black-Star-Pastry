import Main from "./pages/Main";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CakeMenu from "./components/CakeMenu";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/cakes" element={<Cakes />} />

        <Route exact path="/displaycakes" element={<CakeMenu />} />
      </Routes>
    </Router>
  );
}
export default App;
