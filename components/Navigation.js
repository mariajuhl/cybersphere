import React from "react";

export default function Navigation({ hasScrolledToWave }) {
  return (
    <section className={`navigationsbar ${hasScrolledToWave ? "has-scrolled-to-wave" : ""}`}>
      <div>
        <a href="/#internettet">Internettet og klima</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="62.017" viewBox="0 0 62.017 3">
            <line id="Line_4" data-name="Line 4" x1="62.017" transform="translate(0 1.5)" fill="none" stroke="#2d3f5e" stroke-width="2.5"/>
          </svg>
      </div>

      <div>
        <a href="/#tilbyder">Det tilbyder vi</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="62.017" viewBox="0 0 62.017 3">
            <line id="Line_4" data-name="Line 4" x1="62.017" transform="translate(0 1.5)" fill="none" stroke="#2d3f5e" stroke-width="2.5"/>
          </svg>
      </div>

      <div>
        <a href="/#losning">Løsningen</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="62.017" viewBox="0 0 62.017 3">
            <line id="Line_4" data-name="Line 4" x1="62.017" transform="translate(0 1.5)" fill="none" stroke="#2d3f5e" stroke-width="2.5"/>
          </svg>
      </div>

      <div>
        <a href="/#kontaktOs">Kontakt os</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="62.017" viewBox="0 0 62.017 3">
            <line id="Line_4" data-name="Line 4" x1="62.017" transform="translate(0 1.5)" fill="none" stroke="#2d3f5e" stroke-width="2.5"/>
          </svg>
      </div>
    </section>
  );
}
