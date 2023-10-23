import React from "react";
import { SocialIcon } from "react-social-icons";

const Left = () => {
  return (
    <div className="left_static_section">
      <div className="content">
        <div className="author-name text-5xl dash-after dash-animate">
          Abdullah
          <br />
          Jaber Mohamad
        </div>
        <div className="links_list mt-10">
            <a href="#about" className="section_link active mb-2 text-sm font-semibold rounded-full  transition duration-200 all">ABOUT</a>
            <a href="#experience" className="section_link mb-2 text-sm font-semibold rounded-full  transition duration-200 all">EXPERIENCE</a>
            <a href="#projects" className="section_link text-sm font-semibold rounded-full  transition duration-200 all">PROJECTS</a>
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
