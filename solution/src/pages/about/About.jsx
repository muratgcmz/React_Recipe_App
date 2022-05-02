

import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About FrontEnd Developer <span>Murat GÖÇMEZ</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Murat GÖÇMEZ</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known HTML, CSS, JS, ReactJS, SQL, Python, Bootstrap, MUI, SASS.
          
        </h4>
        <h2>
          <a href="mailto:gocmezmurat@gmail.com">Send email</a> :
          gocmezmurat@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
