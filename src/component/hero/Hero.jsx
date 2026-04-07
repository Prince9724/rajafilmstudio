import React from 'react'
// import png from "https://cdn.pixabay.co m/photo/2014/10/29/01/00/logo-507440_640.png"
import ban1 from "../images/logo/RAJA FILMS STUDIO.png"
import ban2 from "../images/hero/Rk banner final anil akela entertainment.png"
import ban3 from "../images/hero/sec2.jpeg"
import "../hero/Hero.css"
const Hero = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src={ban1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption  ">
                            <h5> logo design</h5>
                            <p>Transform Your Brand Identity with a Unique, Professional Logo Tailored Just for You.</p>
                            <button className="btn  btn-outline-danger">Veiw work</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src={ban2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption  ">
                            <h5> Poster Design</h5>
                            <p>Capture Every Eye with High-Impact Banner Designs That Make Your Brand Impossible to Ignore</p>
                        <button className="btn  btn-outline-danger">Watch Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ban3} className="d-block w-100 object-fit-cover" alt="..." />
                        <div className="carousel-caption ">
                            <h5> Youtube</h5>
                            <p> Experience the Magic of Music: Subscribe to Our YouTube Channel for Soulful Melodies and Exclusive Hits.</p>
                        <a href="https://www.youtube.com/@RajaFilmsStudio">
                            <button className="btn btn-outline-danger">Watch Now</button>
                        </a>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon bg-black" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon bg-black" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Hero