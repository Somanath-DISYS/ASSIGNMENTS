import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComponent from "./Pages/Header";
import NavbarComponent from "./Pages/Navbar";
import HomeComponent from "./Components/Slice";
import TailerComponent from "./Pages/tailer";
import TopComponent from "./Components/Top";
import ChooseComponent from "./Components/Choose";

export default function App() {
  return (
    <div>


      <NavbarComponent />
      <HeaderComponent />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomeComponent} />
          <Route path='/Top' exact component={TopComponent} />
          <Route path='/Choose' exact component={ChooseComponent} />
        </Switch>
      </BrowserRouter>
      <TailerComponent />
    </div>
  );
}

