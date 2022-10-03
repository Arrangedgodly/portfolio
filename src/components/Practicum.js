import html from "../images/html5.svg";
import css from "../images/css3-alt.svg";

function Practicum() {
    return (
        <section id="intro" className="project">
            <h2 className="cat_title">Practicum Projects</h2>
            <p className="cat_desc">Practicum is a paid course that I am actively taking, sponsored by Yandex. They feature three
              different programs, but I am specifically in the 'Full Stack Software Engineering' course. The course is designed to 
              teach you JavaScript & React, HTML5 & CSS3, Git & GitHub, Webpack, MongoDB, Node.js, Express.js, and REST API.
              You can find out more about their program <a href="https://practicum.com/" target="_blank" className="cat_link">here</a>.
            </p>
            <div>
              <h3 className="cat_subtitle">HTML & CSS</h3>
              <img
                src={html}
                className="icon"
                alt="html5 icon"
              />
              <img
                src={css}
                className="icon"
                alt="css3 icon"
              />
            </div>
              <div className="cards">
                <a href="https://arrangedgodly.com/web_project_1/" target="_blank" className="card__link">
                  <div className="card">
                    <h4 className="card_title">Practicum Library</h4>
                    <p className="card_text">A grand step in learning how to control specific elements to meet 
                      a template standard and structure files appropriately. Flexbox basics</p>
                  </div>
                </a>
                <a href="https://arrangedgodly.com/se_project_coffeeshop/" target="_blank" className="card__link">
                  <div className="card">
                    <h4 className="card_title">Coffeeshop</h4>
                    <p className="card_text">More progress with building a page entirely from scratch, linking 
                      files internally and creating a more advanced layout based on a template. Advanced flexbox and animation additions
                    </p>
                  </div>
                </a>
                <a href="https://arrangedgodly.com/se_project_aroundtheus/" target="_blank" className="card__link">
                  <div className="card">
                    <h4 className="card_title">Around the US</h4>
                    <p className="card_text">A grand step in learning responsive web design, as well as working with Figma templates.
                      Around the US was designed to display different webpages for phones, tablets and desktops.
                    </p>
                  </div>
                </a>
              </div>
          </section>
    );
}

export default Practicum;