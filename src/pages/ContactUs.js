import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="contact-us-component">
        <h1 className="contact-us">Get in Touch!</h1>
        <h2 className="contact-us-email"> Email: piratepals22@gmail.com</h2>
        <h2 className="contact-us-phone"> Phone: (919) 717 - 4703</h2>
        <h2 className="contact-us-message">
          Reach out to us and we will get back to you as soon as possible!
        </h2>
      </div>
      <div className="contact-us-faq-component">
        <div className="faq">
          <h1>FAQ</h1>
        </div>
        <div className="question">
          <h3> Do I have to volunteer at every event? </h3>
        </div>
        <p className="answer">
          No! Members of Pirate Pals are not required to volunteer at every
          event, but are encouraged to volunteer at every event. The more
          volunteers there are the merrier!
        </p>
        <div className="question">
          <h3> Do I have to be pre-med to volunteer? </h3>
        </div>
        <p className="answer">
          No! Members of Pirate Pals are not required to be a certain major. In
          fact we welcome all types of majors and backgrounds to Pirate Pals!
          Everyone can volunteer.
        </p>
        <div className="question">
          <h3>
            {" "}
            Is there a required amount of hours that you have to volunteer for?{" "}
          </h3>
        </div>
        <p className="answer">
          No! Members of Pirate Pals are not required to volunteer a certain
          amount of hours. You can volunteer as little or as much as you want!
        </p>
        <div className="question">
          <h3>Is it too late to join?</h3>
        </div>
        <p className="answer">
          No! Members of Pirate Pals can join the club and start volunteering
          whenever they want!
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
