import React from 'react';
import './App.css';

function App() {
  return (
<div className="container">
      <h1 className='text-center'>THREEL</h1>
      <div className="registerContainer mx-auto my-auto">
        <h2 className='text-center'>LOG IN</h2>
        <form className='form-group'>
          <input type="text" id="username" name="username" placeholder="Username or Email" required />

          <input type="password" id="password" name="password" placeholder="Password" required />

          <p className='mx-auto'>Don't have an account? <a href="">Register Now!</a></p>

          <div className='mx-auto'>
          <button type="submit" className="loginButton">Log In</button>
          <button type="button" className="cancelButton">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
