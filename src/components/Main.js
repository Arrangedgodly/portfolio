import Intro from './Intro';
import Resume from './Resume';
import Practicum from './Practicum';
import FreeCodeCamp from './FreeCodeCamp';
import About from './About';

function Main({activePage}) {
    return (
        <main>
            {activePage === 'home' && (
                <Intro />
            )}
            {activePage === 'resume' && (
                <Resume />
            )}
            {activePage === 'practicum' && (
                <Practicum />
            )}
            {activePage === 'fcc' && (
                <FreeCodeCamp />
            )}
            {activePage === 'about' && (
                <About />
            )}
        </main>
    );
}

export default Main;