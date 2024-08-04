import Main from "./pages/Main";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/cakes">
          <Cakes />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
