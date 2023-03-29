import React from "react";
import vk from "../images/vk.jpg";
import email_logo from "../images/email.svg";

function Info() {
  const sendEmail = () => {
    window.location.href = "mailto:notmail@domain.com";
  };

  return (
    <div>
      <img src={vk} alt="profile-pic" className="profile-pic" />
      <div className="name">
        <h1>Avyukth Reddy</h1>
        <h4>Student</h4>
        <a href="">
          <h5 className="portfolio-link">Digital Business Card</h5>
        </a>
      </div>

      <button
        type="button"
        className="email_button"
        onClick={sendEmail}
      >
        <img src={email_logo} alt="email_logo" className="email_logo" /> Email
      </button>
    </div>
  );
}

export default Info;
