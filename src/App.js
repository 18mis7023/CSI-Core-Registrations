import './App.css';
import RegisterStage1 from './Components/RegisterStage1';
import RegisterStage2 from './Components/RegisterStage2';
import Header from './Components/Header';
import HomeContent from './Components/HomeContent';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Hooks/ScrollToTop";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Router>
          <Switch>
              <Route exact path="/" component={HomeContent}></Route>
              <Route exact path="/registerstage1" component={RegisterStage1}></Route>
              <Route exact path="/registerstage2" component={RegisterStage2}></Route>
          </Switch>
        </Router> */}
        <BrowserRouter>
        {/* <Header /> */}
        <ScrollToTop>
          <div className="app_child">
            <Switch>
              <Route exact path="/">
                <HomeContent />
              </Route>
              <Route path="/registerstage1">
                <RegisterStage1 />
              </Route>
              <Route path="/registerstage1">
                <RegisterStage2 />
              </Route>
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
