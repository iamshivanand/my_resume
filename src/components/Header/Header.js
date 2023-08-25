import React from "react";
import "./Header.css";
import githublogo from "../../assets/github-dark.svg";
import linkedinlogo from "../../assets/linkedin.svg";
import profile from "../../assets/shiv.jpg";
const Header = () => {
  return (
    <div className="main-header-div">
      <div className="left-div-header">
      
          <img src={profile} alt="profile" />
        
      </div>
      <div className="right-div-header">
        <h2 className="header-greeting">Hello!</h2>
        <h1>I'm SHIV ANAND</h1>
        <h4>Software Engineer / Web Developer</h4>
        <p>
          I'm an experienced software developer with two years at a dynamic
          startup, specializing in creating top-notch user experiences using
          React. I'm a curious learner, always diving into new technologies to
          find fresh solutions that look ahead. My startup background means I'm
          quick on my feet and adaptable, ready to turn ambitious ideas into
          real results. With React as my toolkit, I build sleek interfaces that
          work smoothly, and I'm great at explaining complex stuff in simple
          terms, making teamwork seamless. I'm all about dedication, creativity,
          and teamwork, ready to take projects above and beyond to make a real
          impact. Let's connect and craft something amazing together!
        </p>
        <h4>Find me on</h4>
        <div style={{ display: "flex" }}>
          <div
            className="social-handle-button"
            onClick={() => {
              window.open("https://github.com/iamshivanand", "_blank");
            }}
          >
            <img src={githublogo} alt="github" />
          </div>
          <div
            className="social-handle-button"
            onClick={() => {
              window.open("https://www.linkedin.com/in/shiv-anand/", "_blank");
            }}
          >
            <img src={linkedinlogo} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
