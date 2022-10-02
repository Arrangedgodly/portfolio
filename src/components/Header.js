function Header({handleButtonClick}) {
    return (
        <header className="header">
            <h1 className="header__title">Grady Wasil's Coding Portfolio</h1>
            <nav className="nav">
                <ul className="nav__list">
                    <li>
                        <a onClick={() => handleButtonClick('home')} className="header__link">Home</a>
                    </li>
                    <li>
                        <a href="pages/practicum.html" className="header__link">Practicum Projects</a>
                    </li>
                    <li>
                        <a href="pages/fcc.html" className="header__link">Free Code Camp Projects</a>
                    </li>
                    <li>
                        <a onClick={() => handleButtonClick('resume')} className="header__link resume__text">Resume</a>
                    </li>
                    <li>
                        <a href="pages/about.html" className="header__link">About Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;