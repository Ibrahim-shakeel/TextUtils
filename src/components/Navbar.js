import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          {/* Theme color buttons */}
          <div className="d-flex">
            {['primary', 'danger', 'success', 'warning'].map((cls) => (
              <div
                key={cls}
                className={`bg-${cls} rounded mx-2`}
                onClick={() => props.toggleMode(cls)}
                style={{ height: '30px', width: '30px', cursor: 'pointer' }}
              ></div>
            ))}
          </div>

          {/* Light/Dark Mode Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="flexSwitchCheckDefault" 
              onClick={() => props.toggleMode(null)} 
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
