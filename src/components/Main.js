import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main_component">
      <div className="welcome_component">
        <h1 id="welcome-text" className="welcome_text">
          Welcome to Pirate Pals!
        </h1>
      </div>

      <div className="piratePals_container_mission">
        <div className="piratePicture">
          <img src="../images/piratePals2.png" className="pirateImage"></img>
        </div>

        <h1 className="what_piratePals">
          Pirate Pals. A nonprofit, service-based organization led by ECU
          students.
        </h1>
      </div>

      <div className="mission_statement_component">
        <h1 id="our-mission" className="our_mission">
          Our Mission
        </h1>
        <h1 className="mission_statement">
          To provide trusting, supportive relationships with pediatric patients
          and their families while providing educational opportunities for its'
          members. Activites compose of the pairing of pedatric patients at
          Vidant health with members. Memebrs will have an ongoing relationship
          with their "pal" and will support them throughout their treatment.
        </h1>
      </div>
    </div>
  );
}

export default Main;
