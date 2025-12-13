import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    const year=new Date().getFullYear();
    return (
    <>  
        <div className="footer">
            <div className="footer-logo">
                <Link to="/"><img  width="80px" src="Images/footerLogo1.png" alt="logo"/></Link>
                <Link to="/"><img  width="110px" style={{position: 'relative', bottom: '5px'}} src="Images/footerLogo2.png" alt="logo"/></Link>
            </div>

            <div className="quick-links">
                <p>Quick Links</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul> 
            </div>

            <div className="shop">
                <p>Categories</p>
                <ul>
                    <li><Link to="/shoes">Shoes</Link></li>
                    <li><Link to="/clothing">Clothes</Link></li>
                </ul>
            </div>

            <div className="connect">
                <p>Get in touch</p>
                <a href="https://github.com/ashish187221" target='_blank'><img style={{ borderRadius: '50%' }} height='25px' src="Images/9_Github_logo.jpg" alt="github"/></a>
                <a href="https://www.linkedin.com/in/ashish-rana-2170a5305/"target='_blank'><img style={{ borderRadius: '10px'}}  height="25px" src="Images/10_Linkedin_logo.png" alt="linkedin"/></a>
                <a href="https://www.instagram.com/ranaashish85/"target='_blank'><img style={{borderRadius: '50%'}} height="25px" src="Images/11_InstagramLogo.png" alt="instagram"/></a>
            </div>
        </div>

        <div className="copyright">
            <p>Copyright &copy; {year}, All Rights Reserved.</p>
        </div>
    </>
  );
}
