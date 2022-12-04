import React from 'react';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import { Header, Footer } from './components/common';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        {/* <Route path='/news-updates' exact component={News}/> */}
        <Route path='/contact' exact component={Contact}/>
        {/* <Route path="/about-the-company" exact component={About}/> */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
