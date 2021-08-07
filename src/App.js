import './App.css';
import RegisterStage1 from './Components/RegisterStage1';
import RegisterStage2 from './Components/RegisterStage2';
import Header from './Components/Header';
import HomeContent from './Components/HomeContent';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        
      <Header />
      <Switch>
        <Route path="/">
          <HomeContent />
        </Route>
          <Route exact path="/registerstage1" component={RegisterStage1}></Route>
          <Route exact path="/registerstage2" component={RegisterStage2}></Route>
      </Switch>
        
      </div>
    </Router>
  );
}

export default App;
