import fcc from "../images/free-code-camp.svg";
import html from "../images/html5.svg";
import css from "../images/css3-alt.svg";
import javascript from "../images/js-square.svg";

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
                <a href="https://codepen.io/arrangedgodly/full/JjJxXgv" target="_blank" className="card__link">
                    <div className="card">
                        <h4 className="card_title">Tribute</h4>
                        <p className="card_text">The project to start the entire dive. A very basic HTML project 
                            dedicated to Terance McKenna.</p>
                    </div>
                </a>
                <a href="https://codepen.io/arrangedgodly/full/VwydPVe" target="_blank" className="card__link">
                    <div className="card">
                        <h4 className="card_title">Survey</h4>
                        <p className="card_text">A step in the right direction. Learning to incorporate stylization 
                            in a CSS file and create an input form for a webpage.</p>
                    </div>
                </a>
                <a href="https://codepen.io/arrangedgodly/full/RwxJdab" target="_blank" className="card__link">
                    <div className="card">
                        <h4 className="card_title">Product Landing</h4>
                        <p className="card_text">Continuing with the music theme, this is a mock landing page for 
                            a mixing and mastering service.</p>
                    </div>
                </a>
                <a href="https://codepen.io/arrangedgodly/full/oNpaXMe" target="_blank" className="card__link">
                    <div className="card">
                        <h4 className="card_title">Technical Documentation</h4>
                        <p className="card_text">For an intensive overhaul on a basic project, I decided to create 
                            a 'documentation' page that leads you to the basic lore background of each champion in 
                            League of Legends.</p>
                    </div>
                </a>
                <a href="https://codepen.io/arrangedgodly/full/jOYebLq" target="_blank" className="card__link">
                    <div className="card">
                        <h4 className="card_title">Portfolio</h4>
                        <p className="card_text">A basic attempt at building what eventually turned into this exact webpage. 
                            Naturally, the end product turned out much better, wouldn't you agree?</p>
                    </div>
                </a>
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
                <a 
                    href="https://github.com/Arrangedgodly/JavaScript-Projects/blob/main/palindromecheckerproject.js"
                    target="_blank"
                    className="card__link"
                    >
                    <div className="card">
                        <h4 className="card_title">Palindrome Checker</h4>
                        <p className="card_text">A simple project that takes a string, negates all non alphanumeric characters, and
                            double checks in the remaining string is a palindrome (same forwards and backwards)
                        </p>
                    </div>
                </a>
                <a
                    href="https://github.com/Arrangedgodly/JavaScript-Projects/blob/main/caesarscipherproject.js"
                    target="_blank"
                    className="card__link"
                    >
                    <div className="card">
                        <h4 className="card_title">Caesar's Cipher</h4>
                        <p className="card_text">Another simple function project that takes a string as an input, and changes it via
                            a cipher. The cipher changes the characters for a character 13 different than itself
                        </p>
                    </div>
                </a>
                <a
                    href="https://github.com/Arrangedgodly/JavaScript-Projects/blob/main/romanNumeral.js"
                    target="_blank"
                    className="card__link"
                    >
                    <div className="card">
                        <h4 className="card_title">Roman Numeral Converter</h4>
                        <p className="card_text">Another simple function that takes a number, and outputs a string that converts the 
                            number into the Roman Numeral equivalent
                        </p>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default FreeCodeCamp;