import React from 'react';
import { Link } from 'react-router-dom';

import './styles/home.css';

const Home = () => {

  return(
    <>
    
    <div className="contain">
      <div className="headr"><h1>REMIND</h1></div>
      <div className="loging">
      <h3>Log in</h3>
        <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Link to="/patients">
                  <button type="submit" className="btton">Me connecter</button>
                </Link>
                  <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                  </p>
            </form>
      </div>
      
      <div className="register">
        <Link to="/register">
          <button type="submit" className="btton">Créer un Compte</button>
        </Link>
        
      </div>
      
    </div>
    </>
  )
}


export default Home;
