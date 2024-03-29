import "./App.css";
import LandingPage from './routes/LandingPage';
import FirstRoute from "./routes/FirstRoute.js";
import Staking from "./routes/Staking.js";
import SecondRoute from './routes/SecondRoute.js';
import Wallet from './hooks/Wallet.js'
import NFTDetail from './components/NFTDetail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //

  return (
    <Router>
      <div className="App">
        <Wallet />
        {/* <NavBar /> */}
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/gallery" exact component={FirstRoute} />
          <Route path="/gallery/:id" component={NFTDetail} />
          <Route path="/mywaifus" component={SecondRoute} />
          <Route path="/staking" component={Staking} />
        </Switch>
        {/* <Wave /> */}
      </div>
    </Router>
  );
}

export default App;
