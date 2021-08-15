import "./App.css";
import RegisterStage1 from "./Components/RegisterStage1";
import RegisterStage2 from "./Components/RegisterStage2";
import RegisterStage3 from "./Components/RegisterStage3";
import Submitted from "./Components/submitted";
import Header from "./Components/Header";
import HomeContent from "./Components/HomeContent";
import Contact from "./Components/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContent}></Route>
          <Route
            exact
            path="/registerstage1"
            component={RegisterStage1}
          ></Route>
          <Route
            exact
            path="/registerstage2"
            component={RegisterStage2}
          ></Route>
          <Route
            exact
            path="/registerstage3"
            component={RegisterStage3}
          ></Route>
          <Route exact path="/submitted" component={Submitted}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
