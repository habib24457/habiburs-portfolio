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
            {/* <a
              class="recomm-button"
              href="https://drive.google.com/file/d/1YoNEbyQayNE3SSAw0VvcS4k3KHGr4RQj/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              role="button"
              style={{ textDecoration: "none" }}
            >
              Check Recommendation Letter
            </a> */}
          </p>
          <ul className="list-style">
            <li className="myText-style">
              Writing modern, clean, maintainable code for a diverse array of
              client and internal projects
            </li>

            <li className="myText-style">
              Working with a variety of different languages, platforms,
              frameworks, and content management systems such as JavaScript,
              TypeScript, React, redux, Express, Node JS.
            </li>
            <li className="myText-style">
              Worked with microsoft's Live share SDK, created UI for mobile
              devices. Design and maintain REST API on a daily basis
            </li>
            <li className="myText-style">
              Communicate with different teams of developers, designers and
              clients regularly.{" "}
            </li>
          </ul>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Experience;
