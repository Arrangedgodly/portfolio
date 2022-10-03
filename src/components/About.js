import bandcamp from "../images/bandcamp.svg";
import instagram from "../images/instagram.svg";
import itunes from "../images/itunes-note.svg";
import soundcloud from "../images/soundcloud.svg";
import spotify from "../images/spotify.svg";
import youtube from "../images/youtube.svg";

function About() {
    return (
        <>
        <section className="intro" id="intro">
                <h2 className="intro__title">Get to Know Me</h2>
                <p className="intro__text">When you get down to it, I don't think I am the most interesting person. My palette is not as diverse
                as others, but I try to be pretty easy to please. 
                </p>
            </section>
            <section className="project">
                <h3 className="cat_title">My Hobbies</h3>
                <div className="icons">
                    <a
                        href="https://arrangedgodly.bandcamp.com/releases"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={bandcamp}
                            className="icon_large icon_hover"
                            alt="bandcamp icon"
                        />
                        <p className="icon__text">BandCamp</p>
                    </a>
                    <a
                        href="https://www.instagram.com/shitshowprod/"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                        src={instagram}
                        className="icon_large icon_hover"
                        alt="instagram icon"
                        />
                        <p className="icon__text">Instagram</p>
                    </a>
                    <a
                        href="https://music.apple.com/us/artist/arranged-godly/1458058829"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={itunes}
                            className="icon_large icon_hover"
                            alt="itunes icon"
                        />
                        <p className="icon__text">iTunes</p>
                    </a>
                    <a
                        href="https://soundcloud.com/arrangedgodly"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={soundcloud}
                            className="icon_large icon_hover"
                            alt="soundcloud icon"
                        />
                        <p className="icon__text">SoundCloud</p>
                    </a>
                    <a
                        href="https://open.spotify.com/artist/6fU2oYGFt9cpE6lZqvn2pI"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={spotify}
                            className="icon_large icon_hover"
                            alt="spotify icon"
                        />
                        <p className="icon__text">Spotify</p>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCYH3KPRayKp2TVUujpQbhCg"
                        target="_blank"
                        className="icon_wrapper"
                    >
                        <img
                            src={youtube}
                            className="icon_large icon_hover"
                            alt="youtube icon"
                        />
                        <p className="icon__text">YouTube</p>
                    </a>
                </div>
                <div className="cards">
                    <a href="https://songwhip.com/arrangedgodly" target="_blank" className="card__link">
                        <div className="card">
                            <h4 className="card_title">Music</h4>
                            <p className="card_text">I rap and produce music under the name Arranged Godly, circa 2017.</p>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCYH3KPRayKp2TVUujpQbhCg" target="_blank" className="card__link">
                        <div className="card">
                            <h4 className="card_title">Videos</h4>
                            <p className="card_text">Although a beginner in the video editing world, I love getting to work on music/lyric
                                videos or sketch comedy alike.
                            </p>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
}

export default About;