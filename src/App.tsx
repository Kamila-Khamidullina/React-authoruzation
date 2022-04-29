import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import Main from './pages/Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => { if (window.name.length > 0) { setLoggedIn(true) } })

  return (
    <div className="page-container">
      <div className="content">
        <BrowserRouter>
          <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <main className="form-signin">
            <Route path='/' exact component={() => <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path='/login' component={() => <Login setLoggedIn={setLoggedIn} />} />
            <Route path='/register' component={Register} />
            <Route path='/main' component={Main} />
          </main>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
