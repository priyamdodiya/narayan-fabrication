import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Icons.css';
const Icons = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                &copy; 2022 Fabrication World | Developed By <span className="font-bold">MavenCluster</span>
            </div>
            <div className="footer-icons">
                <a href="https://www.facebook.com/profile.php?id=100083866235692">
                <FaFacebookF className="icon" />
                </a>
                <a href="https://www.instagram.com/jay_8_1_1/">
                <FaInstagram  className="icon" />
                </a>
            </div>
            <a href="https://wa.me/7284013879" target="_blank" rel="noopener noreferrer" className="whatsapp-container">
                <FaWhatsapp className="whatsapp-icon"  />
            </a>
        </footer>
    );
};

export default Icons;