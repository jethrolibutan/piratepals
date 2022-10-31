import React from "react";

function GetInvolved() {
  return (
    <div className="get-involved-container">
      <h2 className="get-involved-title">
        Click on these buttons to get involved!{" "}
      </h2>

      <div className="component">
        <a href="https://groupme.com" rel="noopener" target="_blank">
          <div className="groupme-component">
            <img src="../images/groupMe.png" className="groupme"></img>
            {/* <h2 className="text-position">Join our GroupMe!</h2> */}
          </div>
        </a>
      </div>
      <div className="component">
        <a
          href="https://instagram.com/piratepalsecu/"
          rel="noopener"
          target="_blank"
        >
          <div className="instagram-component">
            <img src="../images/piratePals.jpg" className="instagram"></img>
            {/* <h2 className="text-position">Follow us on Instagram!</h2> */}
          </div>
        </a>
      </div>
      <div className="component">
        <a
          href="https://engage.ecu.edu/organization/piratepals"
          rel="noopener"
          target="_blank"
        >
          <div className="engage-component">
            <img src="../images/ecuLogo.jpeg" className="engage"></img>
            {/* <h2 className="text-position">Join us on Engage!</h2> */}
          </div>
        </a>
      </div>
    </div>
  );
}

export default GetInvolved;
