import html from "../images/html5.svg";
import css from "../images/css3-alt.svg";
import javascript from '../images/js-square.svg';
import react from '../images/react.svg';
import Card from "./Card";
import { practicumHTML, practicumJS } from '../utils/constants';

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
                {
                  practicumHTML.map(item => (
                    <Card
                      name={item.name}
                      link={item.link}
                      desc={item.desc}
                    />
                  ))
                }
              </div>
              <div>
              <h3 className="cat_subtitle">JavaScript, React & REST API</h3>
              <img
                src={javascript}
                className="icon"
                alt="javascript icon"
              />
              <img
                src={react}
                className="icon"
                alt="react icon"
              />
            </div>
            <div className="cards">
                {
                  practicumJS.map(item => (
                    <Card
                      name={item.name}
                      link={item.link}
                      desc={item.desc}
                    />
                  ))
                }
              </div>
          </section>
    );
}

export default Practicum;