import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './pageStructure/Header'
import Footer from './pageStructure/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import webLogo3 from './images/webLogo4.png'

function App() {
  return (
    <>
      <Router>
        <Header
          logo={webLogo3} 
          to="/"
          twitter='https://www.twitter.com/tpchant'
          linkedin='https://www.linkedin.com/in/thomas-chant-59b557a7/'
          github='https://github.com/DoubleNemesis'
          youtube='https://www.youtube.com/channel/UCSSNvHoAGsQLLgOaSjPcMIg'
          email='test@test.com'
        >
          <span>
            <Link to="/">home</Link>
          </span>
          <span>
            <Link to="/about">about</Link>
          </span>
          <span>
            <Link to="/portfolio">portfolio</Link>
          </span>
          <span>
            <Link to="blog">vlog</Link>
          </span>
          <span>
            <Link to="contact">contact</Link>
          </span>
        </Header>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route >
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer>
          <h5><Link to="/">&copy; Thomas Chant 2021</Link></h5>
          <span>
          <span>
            <Link to="/about">about</Link>
          </span>
          <span>
            <Link to="/portfolio">portfolio</Link>
          </span>
          <span>
            <Link to="blog">vlog</Link>
          </span>
          <span>
            <Link to="contact">contact</Link>
          </span>
          </span>
        </Footer>
      </Router>
    </>
  );
}

export default App;