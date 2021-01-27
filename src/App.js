import Navbar from './components/navbar'
import Home from './components/home'
import AboutUs from './components/about-us'
import Services from './components/services'
import Located from './components/located'
import Reviews from './components/reviews'
import BeforeAfter from './components/before-after'

import { Switch, Route, withRouter, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

          <Switch>
            <Route path='/home'>
              <Home/>
            </Route>
          </Switch>

          <Switch>
            <Route path='/about-us'>
              <AboutUs/>
            </Route>
          </Switch>

          <Switch>
            <Route path='/services'>
              <Services/>
            </Route>
          </Switch>

          <Switch>
            <Route path='/located'>
              <Located/>
            </Route>
          </Switch>

          <Switch>
            <Route path='/reviews'>
              <Reviews/>
            </Route>
          </Switch>

          <Switch>
            <Route path='/before-after'>
              <BeforeAfter/>
            </Route>
          </Switch>
          
      </BrowserRouter>
    </div>
  );
}


export default App;
