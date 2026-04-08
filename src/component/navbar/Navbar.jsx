import React, { useContext } from 'react'
import logo from "../images/logo/RAJA FILMS STUDIO.png";
import "../navbar/Navbar.css"
import { useNavigate } from 'react-router';
import { LangContext } from "../../language";
const Navbar = () => {
    const navigate = useNavigate();

    const { t, lang, setLang } = useContext(LangContext); // 👈 ADD

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ">

                    <img src={logo} alt="logo" className="img-fluid" style={{ height: "80px" }} width="100" />

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <div className='w-100 home d-flex justify-content-center'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link active" onClick={() => navigate("/")}>
                                        {t.home}   {/* 👈 CHANGE */}
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active">
                                        {t.service}
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active">
                                        {t.project}
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active">
                                        {t.about}
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active">
                                        {t.contact}
                                    </a>
                                </li>

                            </ul>
                        </div>

                        {/* 🔽 LANGUAGE DROPDOWN */}
                        <select
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                            className="lang-dropdown me-3"
                        >
                            <option value="en">English</option>
                            <option value="hi">हिंदी</option>
                        </select>

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