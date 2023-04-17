import punkt1 from "../images/1.svg";
import punkt2 from "../images/2.svg";
import punkt3 from "../images/3.svg";
import punkt4 from "../images/4.svg";
import punkt5 from "../images/5.svg";
import punkt6 from "../images/6.svg";
import animation from "../images/animation.mp4";
import React, {useEffect} from "react";
import ForsideLink from "../components/Knap";

export default function Webapplikationer() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <main>
            <section className="undersideHeroSektion">
            <video 
            src={animation}
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop>
            </video>
            
            <div>
            <h1 className="mindreFont">Webapplikationer</h1>
            
            <p>
            Digitale salgsværktøjer, moderne web apps, alt sammen hører under samme paraply – og vi kan hjælpe med det hele. Vi rådgiver jer om hvordan man kan hoppe med på bølgen om at process optimere sin virksomhed gennem digitale processer.            </p>
            </div>
            </section>

            <section className="venstrestillet">
                <h5>Hvorfor vælge os?</h5>
                <p>
                Vores hovedfokus er dig og din virksomheds behov, og i et tæt samarbejde lægger vi en fælles plan for hvordan vi skræddersyer det perfekte website til dig. 
                <br></br>
                <br></br>
                Det der dog differentier os fra markedet, er vores stærke fokus på en mere bæredygtig verden! 
                <br></br>
                <br></br>
                Vi udvikler skræddersyet og skalerbare webapplikationer der, med datasikkerhed og høj performance for øje, bygges til at kunne leve i mange år ud i fremtiden.                </p>
            </section>

            <section className="voresArbejdsmetode">
                <h5>Sådan arbejder vi</h5>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="906.414" height="25.666" viewBox="0 0 906.414 25.666">
                    <line id="Line_31" data-name="Line 31" y1="23.666" transform="translate(1 1)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="1.5"/>
                    <line id="Line_32" data-name="Line 32" x2="904.414" transform="translate(1 1)" fill="none" stroke="#2d3f5e" stroke-width="1.5"/>
                    <line id="Line_33" data-name="Line 33" y1="23.666" transform="translate(905.414 1)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="1.5"/>
                    <line id="Line_34" data-name="Line 34" y1="23.666" transform="translate(184.007 1)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="1.5"/>
                    <line id="Line_35" data-name="Line 35" y1="23.666" transform="translate(367.014 1)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="1.5"/>
                    <line id="Line_36" data-name="Line 36" y1="23.666" transform="translate(550.021 1)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="1.5"/>
                    <line id="Line_37" data-name="Line 37" y1="23.666" transform="translate(715.484 1)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="1.5"/>
                </svg>

                <div className="horisontalTidslinje">
                    <div>
                        <p>UX/UI prototyping</p>
                        <p>Indsigtsdreven strategi</p>
                        <p>Grafisk design</p>
                        <p>Webudvikling</p>
                        <p>Testing & lancering</p>
                        <p>Opfølgning og review</p>
                    </div>

                    <div>
                        <img src={punkt1} alt="Illustration af indsigtsdreven strategi"/>
                        <img src={punkt2} alt="Illustration af UX/UI prototyping"/>
                        <img src={punkt3} alt="Illustration af grafisk design"/>
                        <img src={punkt4} alt="Illustration af webudvikling"/>
                        <img src={punkt5} alt="Illustration af testing og lancering"/>
                        <img src={punkt6} alt="Illustration af opfølgning og review"/>
                    </div>

                </div>
                <ForsideLink/>
            </section>

        </main>
    )
}