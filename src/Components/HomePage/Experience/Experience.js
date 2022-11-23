import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 mt-5 text-center">
          <h2 className="second-color">Experience</h2>
          <p className="myText-style">From:June 2021 - December 2022</p>
          <p className="myText-style">
            Worked as a Frontend developer
            <br />
            at
            <a
              href="https://tegoly.com/?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              Tegoly GmbH
            </a>{" "}
            <br />
            <br />
            <a
              class="recomm-button"
              href="https://drive.google.com/file/d/1YoNEbyQayNE3SSAw0VvcS4k3KHGr4RQj/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              role="button"
              style={{ textDecoration: "none" }}
            >
              Check Recommendation Letter
            </a>
          </p>
          <ul className="list-style">
            <li className="myText-style">
              Developed interactive frontend features integrated with Microsoft
              Teams using React JS, Typescript and some microsoft libraries
              Fluent UI, Microsoft live share SDK
            </li>

            <li className="myText-style">
              Developed and converted complicated desktop pages into mobile
              compatible pages.
            </li>
            <li className="myText-style">
              Integrated REST API, CRUD operation etc.
            </li>
            <li className="myText-style">Worked briefly with c# dotnet. </li>
          </ul>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Experience;
