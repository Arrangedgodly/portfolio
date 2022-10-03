import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__header">Created by Grady Wasil</h2>
            <div className="icons">
                <a href="https://github.com/Arrangedgodly" target="_blank">
                    <img
                        src={github}
                        className="icon icon_hover"
                        alt="github icon"
                    />
                </a>
                <a href="https://www.linkedin.com/in/graydon-wasil-503952239?trk=people-guest_people_search-card" target="_blank">
                    <img
                        src={linkedin}
                        className="icon icon_hover"
                        alt="linkedin icon"
                    />
                </a>
            </div>
            <p className="footer__link">Copyright © 2022</p>
         </footer>
    );
}

export default Footer;