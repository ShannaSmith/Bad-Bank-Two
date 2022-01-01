import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import {UserContext} from './components/UserContext';
import Balance from './components/balance';
import UserContextProvider from './components/UserContext';
import BadBank from './components/BadBank';
import './App.css';

function App() {
  
  return (
    <HashRouter>
      <NavBar/>
      <UserContextProvider>
        <div className="container" style={{padding: "20px"}}>
         
          <Route path='/home/' component={Home}/>
          <Route path='/BadBank/' component={BadBank}/>
          <Route path='/CreateAccount/' component={CreateAccount}/> 
      {/* <Route path="/login/" component={Login} />*/}
          <Route path='/deposit/' component={Deposit} />
          <Route path="/Withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/AllData/" component={AllData} />        
        </div>                  
      </UserContextProvider>     
    </HashRouter>
  )
}

  export default App;

