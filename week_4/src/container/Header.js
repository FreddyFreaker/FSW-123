/* eslint-disable no-unused-vars */
import{BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NoMatch from '../pages/NoMatch'
import header from "./header.css"


function Header() {
    return(
        <>
            <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <hr></hr>
              <Switch>
               <Route exact={true} path="/">
                <Home />
               </Route>
               <Route path="/about">
                <About /> 
               </Route>
               <Route path="/contact">
                <Contact/>
               </Route>
               <Route path="*">
                 <NoMatch />   
                </Route> 
            </Switch>
            </BrowserRouter>
        
        </>
    )
}

export default Header