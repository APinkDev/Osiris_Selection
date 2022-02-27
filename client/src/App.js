import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Start from "./Components/Start";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Start} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/create" component={Create} />
      </BrowserRouter>
    </div>
  );
}

export default App;
