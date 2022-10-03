import fcc from "../images/free-code-camp.svg";
import html from "../images/html5.svg";
import css from "../images/css3-alt.svg";
import javascript from "../images/js-square.svg";
import Card from "./Card";
import { fccResponsiveWebDesign, fccJavascript } from "../utils/constants";

function FreeCodeCamp() {
    return (
        <section id="intro" className="project">
            <h2 className="cat_title">FreeCodeCamp Projects</h2>
            <img
                src={fcc}
                className="icon_large"
                alt="freecodecamp icon"
            />
            <p className="cat_desc">FreeCodeCamp (as the name implies) is a completely free coding resource that I have only begun
                to scratch the surface on! It is a phenomal resource to quickly accelerate through learning various coding 
                language topics, while providing free certifications for their users.
                You can learn more about their certificates <a href="https://www.freecodecamp.org/" target="_blank" 
                className="cat_link">here</a>.
            </p>
            <div>
                <h3 className="cat_subtitle">Responsive Web Design</h3>
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
            <p className="cat_subdesc">An introduction to HTML for webpage content and CSS for stylization. The most basic of all
                of my coding ventures, but a step I was excited to include in my portfolio page regardless. These truly help to
                reflect on the journey of a beginner.
            </p>
            <div className="cards">
                {
                    fccResponsiveWebDesign.map(item => (
                        <Card 
                            name={item.name}
                            link={item.link}
                            desc={item.desc}
                            key={item.name}
                        />
                    ))
                }
            </div>
            <h3 className="cat_subtitle">JavaScript Algorithms and Data Structures</h3>
            <img
                src={javascript}
                className="icon"
                alt="javascript icon"
            />
            <p className="cat_subdesc">An introduction of JavaScript including variables, arrays, objects, loops, and functions. 
                After learning the fundamentals, the course moves to creating algorithms to manipulate strings, factorialize numbers, 
                and even calculate the orbit of the International Space Station. Two key concepts: Object Oriented Programming (OOP) 
                and Functional Programming (FP).</p>
            <div className="cards">
                {
                    fccJavascript.map(item => (
                        <Card 
                            name={item.name}
                            link={item.link}
                            desc={item.desc}
                            key={item.name}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default FreeCodeCamp;