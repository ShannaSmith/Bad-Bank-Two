import React from 'react';

const NavBar = () => {
    return(
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#/BadBank">Bad Bank</a>
      <button className="navbar-toggler btn btn-outline-secondary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="#/home/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
                   {/*} <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
    </li>*/}
          <li className="nav-item">
            <a className="nav-link" href="#/Deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/Withdraw/">Withdraw</a>
          </li>
        { /* <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>*/}
          <li className="nav-item">
            <a className="nav-link" href="#/AllData/">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    )
}
export default NavBar