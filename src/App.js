import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComponent from "./Pages/Header";
import NavbarComponent from "./Pages/Navbar";
import HomeComponent from "./Components/Slice";
import TailerComponent from "./Pages/tailer";
import TopComponent from "./Components/Top";
import ChooseComponent from "./Components/Choose";

export default function App() {
  return (
    <div className="bg-secondary" >
      <BrowserRouter>
      <NavbarComponent />
      <HeaderComponent />
        <Switch>
          <Route path='/' exact component={HomeComponent} ></Route>
          <Route path='/Top' exact component={TopComponent} ></Route>
          <Route path='/Choose' exact component={ChooseComponent} ></Route>
        </Switch>
      <TailerComponent />
      </BrowserRouter>
    </div>
  );
}

