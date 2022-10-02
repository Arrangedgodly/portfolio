import Intro from './Intro';
import Resume from './Resume';

function Main({activePage}) {
    return (
        <main>
            {activePage === 'home' && (
                <Intro />
            )}
            {activePage === 'resume' && (
                <Resume />
            )}
        </main>
    );
}

export default Main;