import React from 'react'
import {HashRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/home'
import CreateAccount from './components/CreateAccount'
import UserContext from './components/UserContext'

import './App.css';

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
      <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
         {/* <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
  <Route path="/alldata/" component={AllData} />*/}
        </div>                  
      </UserContext.Provider>     
    </HashRouter>
  );
}

  export default App;

