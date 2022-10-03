import Card from './Card';
import {resumeProjects} from '../utils/constants';

function Resume() {
    return (
        <>
        <section className="project resume">
                <h3 className="cat_title resume__text">My Personal Coding Projects</h3>
                <div className="cards">
                    {
                        resumeProjects.map(item => (
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
            <section className="project resume">
                <h3 className="cat_title resume__text">My Certifications</h3>
                <div className="cards">
                    <a href="https://www.freecodecamp.org/certification/Graydon-Wasil/responsive-web-design" target="_blank" className="card__link">
                        <div className="card resume__card">
                            <h4 className="card_title">Responsive Web Design</h4>
                            <p className="card_text resume__text_alt">Received April 13th, 2022, issued by FreeCodeCamp</p>
                        </div>
                    </a>
                </div>
        </section>
        </>
    );
}

export default Resume;