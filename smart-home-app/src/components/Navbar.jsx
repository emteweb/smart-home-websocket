import React from 'react';
import { Link } from 'react-router-dom';
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";                            // import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <div className="container-fluid">
                <a className="navbar-brand" href="/api/v1/devices/">
                    <FontAwesomeIcon icon={faHouseLaptop} style={{ fontSize: 30 }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={`/api/v1/devices/`} style={{color:'white',fontSize:22, textDecoration:'none'}}>Home</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;