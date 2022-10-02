import html from '../images/html5.svg';
import css from "../images/css3-alt.svg";
import js from "../images/js-square.svg";
import fcc from "../images/free-code-camp.svg";
import fa from "../images/font-awesome.svg";

function Intro() {
    return (
        <section className="intro" id="intro">
                <h2 className="intro__title">Progress... Through Small Steps</h2>
                <p className="intro__text">Not every project that's a part of this site may seem that crazy, but I am excited to show the full growth of 
                    my coding experiences thus far. I initially started with some ventures on FreeCodeCamp, before starting a paid 
                    program through Practicum. Hopefully this page can provide any ounce of inspiration to you, but if not,
                    it was good practice to continue furthering my ventures for the future.</p>
                <h3 className="cat_subtitle">Coding Language & Resources for this Project</h3>
                <div className="icons icons_margin">
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={html}
                            className="icon_large icon_hover"
                            alt="html5 icon"
                        />
                        <p className="icon__text">HTML5</p>
                    </a>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={css}
                            className="icon_large icon_hover"
                            alt="css3 icon"
                        />
                        <p className="icon__text">CSS3</p>
                    </a>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={js}
                            className="icon_large icon_hover"
                            alt="javascript icon"
                        />
                        <p className="icon__text">JavaScript</p>
                    </a>
                    <a
                        href="https://www.freecodecamp.org/"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={fcc}
                            className="icon_large icon_hover"
                            alt="freecodecamp icon"
                        />
                        <p className="icon__text">FreeCodeCamp</p>
                    </a>
                    <a
                        href="https://fontawesome.com/"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={fa}
                            className="icon_large icon_hover"
                            alt="fontawesome icon"
                        />
                        <p className="icon__text">FontAwesome</p>
                    </a>
                </div>
    </section>
    );
}

export default Intro;