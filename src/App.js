import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import MeetOurTeam from "./pages/MeetOurTeam";
import ContactUs from "./pages/ContactUs";
import GetInvolved from "./pages/GetInvolved";
import "./App.css";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Main> </Main>;
      break;
    case "/meet-our-team":
      component = <MeetOurTeam></MeetOurTeam>;
      break;
    case "/contact-us":
      component = <ContactUs></ContactUs>;
      break;
    case "/get-involved":
      component = <GetInvolved></GetInvolved>;
      break;
  }

  return (
    <div>
      <Navbar />
      {component}
    </div>
  );
}

export default App;
