import React from 'react'
import logo from "../images/logo/RAJA FILMS STUDIO.png";
import "../navbar/Navbar.css"
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <img 
                        src={logo} 
                        alt="logo" 
                        className="img-fluid" 
                        style={{ height: "80px" }} 
                        width="100" 
                    />

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <div className='w-100 home d-flex justify-content-center'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link active" onClick={() => navigate("/")}>
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active cursor-pointer" onClick={() => navigate("/logo")}>
                                        Logo
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" onClick={() => navigate("/poster")}>
                                        Poster
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active">
                                        About
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active">
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <form className="d-flex">
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar