import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Left = () => {

  function checkActiveSection(event) {
    let links = document.getElementsByClassName('section_link');
  
    for (let index = 0; index < links.length; index++) {
      links[index].classList.remove('active');
    }
  
    event.target.classList.add('active');
  }

  return (
    <div className="left_static_section">
      <div className="content flex flex-col justify-between" style={{height:'80vh'}}>
        <div className="author-name text-5xl xl:text-3xl dash-after dash-animate">
          Abdullah
          <br />
          Jaber Mohamad
        </div>
        <div className="links_list mt-10">
            <a href="#about" id="about-link" className="section_link mb-2 text-sm font-semibold rounded-full  transition duration-200 all active" onClick={(e) => checkActiveSection(e)}>ABOUT</a>
            <a href="#experience" id="experience-link" className="section_link mb-2 text-sm font-semibold rounded-full  transition duration-200 all" onClick={(e) => checkActiveSection(e)}>EXPERIENCE</a>
            <a href="#projects" id="projects-link" className="section_link text-sm font-semibold rounded-full  transition duration-200 all" onClick={(e) => checkActiveSection(e)}>PROJECTS</a>
        </div>

        <div className="author-social-medias mt-20">
          <SocialIcon
            url="https://linkedin.com/in/abdallah-jaber-mohammad"
            style={{ width: 35, height: 35 }}
            bgColor="none"
            className="linkedln_svg_icon"
            target="_blank"
          />
          <SocialIcon
            url="https://facebook.com/abdallah-jaber-mohammad"
            style={{ width: 35, height: 35 }}
            bgColor="none"
            target="_blank"
          />
          <SocialIcon
            url="https://instagram.com/abdallah-jaber-mohammad"
            style={{ width: 35, height: 35 }}
            bgColor="none"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Left;
