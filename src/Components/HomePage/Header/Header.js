import React from "react";
import "./Header.css";
import profile from "../../../images/profile.jpg";

const Header = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-6 mt-5 pt-5 text-center">
          <img
            className="shadow-lg"
            style={{
              width: "300px",
              height: "350px",
              padding: "4px",
              borderRadius: "15px",
            }}
            src={profile}
            alt="profile"
          />
        </div>
        <div className="col-md-4 mt-5 pt-5 text-center">
          <div className="myText-style">
            <h1 className="second-color">Hello,</h1>
            <h1>
              <span className="second-color">I'm Habibur Rahman</span>{" "}
            </h1>
            <h5 className="second-color">
              Jr. Full-Stack Developer | MERN Stack Developer | Student
            </h5>
            <h6>
              I am a passionate web developer specialized in both frontend and
              backend. I like to work in a team and share my ideas as well as
              gather knowledge from others. I believe I am capable of accepting
              new challenges and meet my employer's expectations.
            </h6>
          </div>
          <br />
          <br />
          <a
            class="resume-button"
            href="https://drive.google.com/file/d/1FIeQpLnnN9LqurNnHtMLbDm0lL2wM2e0/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            role="button"
            style={{ textDecoration: "none" }}
          >
            Download My Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
