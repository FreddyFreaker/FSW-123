/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import{BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './App.css'
import Header from './container/Header'
import Body from './container/Body'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'

function App() {
    return(
        <>
            <BrowserRouter>
            <Header />
            <Body />
            </BrowserRouter>
        
        </>
    )
}

export default App