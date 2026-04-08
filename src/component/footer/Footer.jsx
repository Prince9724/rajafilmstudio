import React from 'react'
import "../footer/Footer.css"

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}
                <div className="footer-brand">
                    <h2>RAJA FILMS STUDIO</h2>
                    <p>Creating stunning visuals, logos, posters & cinematic edits that make your brand stand out.</p>
                </div>

                {/* CENTER */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Logo</li>
                        <li>Poster</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="footer-social">
                    <h4>Follow Me</h4>
                    <div className="social-icons">

                        {/* Instagram */}
                        <a href="https://www.instagram.com/musicdirector_rk_raja/" target="_blank">
                            <i className="ri-instagram-line"></i>
                        </a>

                        {/* YouTube */}
                        <a href="https://www.youtube.com/@RajaFilmsStudio" target="_blank">
                            <i className="ri-youtube-line"></i>
                        </a>

                        {/* WhatsApp */}
                        <a href="https://wa.me/919569934531" target="_blank">
                            <i className="ri-whatsapp-line"></i>
                        </a>

                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <p>© 2026 RAJA FILMS STUDIO | All Rights Reserved</p>
            </div>
            <div className='footer-credit'>
                <p>© 2026 Created by <span>Prince Gond</span></p>
                <p className='contact'>📞 Connect: 9724672317</p>
            </div>
        </footer>
    )
}

export default Footer