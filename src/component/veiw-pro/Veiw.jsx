import React from 'react'
import logo1 from '../veiw-pro/image/logo/logo7.jpeg'
import logo2 from '../project_work/image/logo11.jpeg';
import poster1 from '../project_work/imagePoster/posterraj2.png'
import poster2 from '../project_work/imagePoster/posabc3.jpeg'
import { useNavigate } from 'react-router';
import Poster from '../project_work/Poster';
const Veiw = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="container ">
                <h1 className="text-center mt-3 ">Gallery</h1>
                <div className=" d-flex justify-content-center mb-3">
                    <ul className="nav nav-tabs " id="myTab" role="tablist">
                        <li className="nav-item  " role="presentation">
                            <button
                                className="nav-link active "
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="home-tab-pane"
                                aria-selected="true"
                            >
                                Logo
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="profile-tab-pane"
                                aria-selected="false"
                            >
                                Poster
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="contact-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#contact-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="contact-tab-pane"
                                aria-selected="false"
                            >
                                video
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="home-tab-pane"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                        tabIndex={0}
                    >
                        <div className="container">
                            <div className="row  mt-2">
                                <div className="col-4 child-row2">
                                    <div className="card">
                                        <img
                                            className="img-fluid w-100"
                                            src={logo1}
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h2>Web project 1</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 child-row2">
                                    <div className="card">
                                        <img
                                            className="img-fluid w-100"
                                            src={logo2}
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h2>Web project 2</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-outline-danger'onClick={()=>navigate("/logo")}>View  more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="profile-tab-pane"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                        tabIndex={0}
                    >
                        <div className="col-4 child-row2 child-row2">
                            <div className="card">
                                <img className="img-fluid w-100" src={poster1} alt="..." />
                                <div className="card-body">
                                    <h2>App Project 1</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="contact-tab-pane"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                        tabIndex={0}
                    >
                        <div className="col-4 child-row2 child-row2 ">
                            <div className="card">
                                <img className="img-fluid w-100" src={".."} alt="..." />
                                <div className="card-body">
                                    <h2>Desion Project 1</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="disabled-tab-pane"
                        role="tabpanel"
                        aria-labelledby="disabled-tab"
                        tabIndex={0}
                    >
                        ...
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Veiw