import React, { useState, useEffect} from "react";
import bølge from "../images/bølge.svg";
import computer from "../images/computer.svg";
import visuelIdentitet from "../images/visuelidentitet.svg";
import webapplikationer from "../images/webapplikationer.svg";
import Navigation from '../components/Navigation';
import kunder from "../images/kunder.png";
import { Link } from 'react-router-dom';
import KontaktFormular from '../components/Kontaktformular';

export default function Forside() {
  const [hasScrolledToWave, setHasScrolledToWave] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const waveSection = document.getElementById("wave-section");
      if (waveSection && window.scrollY >= waveSection.offsetTop - 200) {
        setHasScrolledToWave(true);
      } else {
        setHasScrolledToWave(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function revealOnScroll() {
    const sections = document.querySelectorAll(".fadeReveal");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > sectionTop - windowHeight) {
        section.style.opacity = 1;
        section.style.visibility = "visible";
      } else {
        section.style.opacity = 0;
        section.style.visibility = "hidden";
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);


    return (
      <main>
        <section className="heroSektion">
          <h1 id="heroTekst">Cybersphere</h1>
          <p>
            Hos Cybersphere designer og udvikler vi kreative digitale løsninger
            med fokus på bæredygtighed
            </p>
        </section>

        <a href="#citat" className="pil">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="31.446" viewBox="0 0 75.569 31.446">
            <g id="Group_1" data-name="Group 1" transform="translate(-922.216 -1030.833)">
                <line id="Line_29" data-name="Line 29" x2="37.158" y2="29.888" transform="translate(922.842 1031.612)" fill="none" stroke="#faa900" stroke-width="2.5"/>
                <line id="Line_30" data-name="Line 30" x1="37.158" y2="29.888" transform="translate(960 1031.612)" fill="none" stroke="#faa900" stroke-width="2.5"/>
            </g>
        </svg>
        </a>
  
        <div id="wave-section">
          <img className="bølge" src={bølge} alt="Bølge" />
        </div>

        <Navigation hasScrolledToWave={hasScrolledToWave} />

        <section className="mainSektion">
          <div id="citat"></div>

          <div className="fadeReveal citat">
            <h4>Ligesom universet kan bæredygtighed være en uhåndgribelig størrelse - 
            så lad Cybersphere være din ledestjerne, der viser vejen mod en grønnere fremtid.  
            </h4>

            <h4>
            Vi er et stærkt team med over 20 års erfaring inden for kreativt webdesign, og har i de seneste 5 år specialiseret os i at kombinere det bæredygtige aspekt med et lækkert design i vores kunders digitale løsninger. 
            </h4>
        
            <h4>
            Vores mission er at gøre vores del for at skabe en mere bæredygtig og grønnere fremtid, og vi står klar til at lede din virksomhed i den rigtige retning!             
            </h4>
          </div>

          <div class="tidslinje">
            <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="2300" viewBox="0 0 1000 2300">
              <line id="Line_5" data-name="Line 5" y2="2000" transform="translate(0 45)" fill="none" stroke="#e7e7e7" stroke-width="2"/>
              <line id="Line_10" data-name="Line 10" x2="47" transform="translate(0 45)" fill="none" stroke="#e7e7e7" stroke-width="2"/>
              <line id="Line_11" data-name="Line 11" x2="47" transform="translate(0 1000)" fill="none" stroke="#e7e7e7" stroke-width="2"/>
              <line id="Line_12" data-name="Line 12" x2="47" transform="translate(0 2045)" fill="none" stroke="#e7e7e7" stroke-width="2"/>
              
              <text x="5" y="1" xmlns="http://www.w3.org/2000/svg">
                <tspan class="tidslinjeOverskrift" id="internettet" x="70" dy="0.8em">Internettet er en
                </tspan>

                <tspan class="tidslinjeOverskrift" x="70" dy="1em">klimasynder
                </tspan>
                
                <tspan class="tidslinjeBeskrivelse" x="75" dy="4em">
                  “Hvis internettet var et land, ville det være det 4. største.”
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  Internettet har en stor påvirkning på miljøet, da det kræver 
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  store mængder af energi at drive de datacentre, der leverer 
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  internettet rundt i verden. Det er derfor vigtigt, at vi som 
                </tspan>
                  
                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  samfund bliver mere bevidste om vores internetforbrug  
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  og arbejder på at reducere vores klimaaftryk. 
                </tspan>
                </text>

              <text x="5" y="1050">
                <tspan class="tidslinjeOverskrift" id="tilbyder" x="70" dy="-0.2em">Det tilbyder vi</tspan>
                <tspan class="tidslinjeBeskrivelse" x="75" dy="3em">
                  Hos Cybersphere er vi stolte af at være et af de førende
                </tspan>
              
                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  webbureauer inden for mere bæredygtigt webdesign. 
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  Som kunde hos os kan du være sikker på, at dit website 
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  ikke kun vil være smukt og funktionelt, men samtidig får
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  du et website, der bidrager til en grønnere fremtid.
                </tspan>
              
                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  I et tæt samarbejde med dig og din virksomhed, finder 
                </tspan>
              
                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  vi den bedste løsning til at opnå dit ønskede resultat.
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  Samtidig kan du have ro i sindet, da du ved, at dit 
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  websted er udviklet af et bureau, der har en forpligtelse         
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  til at beskytte vores planet.        
                </tspan>

               

                <tspan class="tidslinjeBeskrivelse" x="75" dy="4em">
                Det vi gør, for at være mere bæredygtige, er blandt        
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                andet at sørge for at effektivisere vores kode. En      
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                kort og effektiviseret kode resulterer i hurtigere  
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                loading tid, som betyder mindre trafik på internettet 
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                og dermed mindre påvirkning af miljøet. Derudover sørger
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                vi for at dine billedefiler er komprimeret, så disse
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                fylder mindst muligt, men samtidigt står skarpt på din
                </tspan>

                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                skærm. Men bare rolig, den proces skal vi nok tage os af!  
                </tspan>
              </text>
  
              <text x="5" y="1950">
                <tspan class="tidslinjeOverskrift" id="losning" x="70" dy="1.5em">Vi har løsningen</tspan>
                <tspan class="tidslinjeBeskrivelse" x="75" dy="4em">
                  Skal du bruge en ny hjemmeside, visuel identitet eller noget 

                  <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                  helt tredje? Lad Cybersphere hjælpe dig med det du mangler.       
                </tspan>
                  
                <tspan class="tidslinjeBeskrivelse" x="75" dy="2em">
                Vi kan det hele!  
                </tspan>
                  
                </tspan>
              </text>
            </svg>
          </div>

          <section className="løsning">
            
            <div className="kort">
              <Link className="link" to={"./Webudvikling"}>
              <img src={computer} alt="Computer"/>
                Webudvikling med fokus på bæredygtighed
                <svg xmlns="http://www.w3.org/2000/svg" width="81.207" height="10" viewBox="0 0 81.207 25">
                <line id="Line_19" data-name="Line 19" x2="80" transform="translate(0.5 10.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_20" data-name="Line 20" x1="10" y1="10" transform="translate(70.5 0.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_21" data-name="Line 21" y1="10" x2="10" transform="translate(70.5 10.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
              </svg>
              </Link>
            </div>

            <div className="kort">
              <Link className="link" to={"./Identitetsdesign"}>
              <img src={visuelIdentitet} alt="Visuel identitet" />
              Identitetsdesign og visuel identitet
              <svg xmlns="http://www.w3.org/2000/svg" width="81.207" height="10" viewBox="0 0 81.207 25">
                <line id="Line_19" data-name="Line 19" x2="80" transform="translate(0.5 10.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_20" data-name="Line 20" x1="10" y1="10" transform="translate(70.5 0.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_21" data-name="Line 21" y1="10" x2="10" transform="translate(70.5 10.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
              </svg>
              </Link>
            </div>

            <div className="kort">
              <Link className="link" to={"./Webapplikationer"}>
              <img src={webapplikationer} alt="Illustration af webapplikation" />
              Webapplikationer og processoptimering
              <svg xmlns="http://www.w3.org/2000/svg" width="81.207" height="10" viewBox="0 0 81.207 25">
                <line id="Line_19" data-name="Line 19" x2="80" transform="translate(0.5 10.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_20" data-name="Line 20" x1="10" y1="10" transform="translate(70.5 0.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_21" data-name="Line 21" y1="10" x2="10" transform="translate(70.5 10.707)" fill="none" stroke="#2d3f5e" stroke-linecap="round" stroke-width="2"/>
              </svg>
              </Link>

            </div>
          </section> 

          <section className="voresKunder">
            <h2>Vores kunder</h2>
            <img className="kunder" src={kunder} alt="Vores kunder"/>
          </section>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" width="1926.386" height="237.709" viewBox="0 0 1926.386 237.709">
        <path id="Path_2" data-name="Path 2" d="M1926.386,992.221s-546.554,82.6-799.467,82.5S610.994,940.675,366.244,937.04,0,1009.121,0,1009.121V837.01H1926.386Z" transform="translate(0 -837.01)" fill="#2d3f5e"/>
        </svg>

        <section id="kontaktOs">
            <h1>Kontakt os</h1>
            <KontaktFormular/>
        </section>

      </main>
    );
  };

