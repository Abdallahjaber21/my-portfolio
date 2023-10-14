import React from "react";
import { SocialIcon } from "react-social-icons";

const SubHeader = () => {
  return (
    <div className="Sub-Header-Section ">
      <div className="content max-w-7xl mx-auto flex justify-between p-4">
        <div className="left text-white">
          <div className="author-name text-5xl dash-after dash-animate">
            Abdullah
            <br />
            Jaber Mohamad
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
        <div className="right text-white text-3xl max-w-lg">
          <text className="text-muted text-sm mb-10">- Introduction</text>
          <br />
          <div>
            <text>Mid-Senior</text>
            <br />
            <text>Full-Stack Developer</text>
          </div>

          <div className="summary text-sm text-muted mt-2">
            Experienced Full-Stack Developer with a strong background in
            designing, developing, and maintaining web applications using a
            diverse range of programming languages and frameworks. Proficient in
            optimizing database schemas, ensuring cross-platform responsiveness,
            and integrating mobile technologies to enhance user experiences.
            Adept at utilizing version control systems and debugging tools to
            deliver high-quality solutions. Committed to continuous learning and
            growth in the ever-evolving tech landscape.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
