import React from "react";
import ExperienceCard from "../cards/ExperienceCard";

const Right = () => {
  return (
    <div className="right_scrollable_section">
      <section id="about">
        {/* <text className="text-muted text-sm mb-10 h-128">- Introduction</text> */}
        <br />
        <div className="text-lg">
          <span>Mid-Senior</span>
          <br />
          <span>Full-Stack Developer</span>
        </div>

        <div className="summary text-lg text-muted mt-2">
          Experienced Full-Stack Developer with a strong background in
          designing, developing, and maintaining web applications using a
          diverse range of programming languages and frameworks. Proficient in
          optimizing database schemas, ensuring cross-platform responsiveness,
          and integrating mobile technologies to enhance user experiences. Adept
          at utilizing version control systems and debugging tools to deliver
          high-quality solutions. Committed to continuous learning and growth in
          the ever-evolving tech landscape.
        </div>
      </section>
      <section id="experience" className="h-128 mt-20">
            <ExperienceCard from="2018" to="present" title="Lead Engineer" position="Senior Engineer Eng" position_details="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship." position_skills="yii2,framwork7,reactjs"/>
            <ExperienceCard from="2018" to="present" title="Lead Engineer" position="Senior Engineer Eng" position_details="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship." position_skills="yii2,framwork7,reactjs"/>
            <ExperienceCard from="2018" to="present" title="Lead Engineer" position="Senior Engineer Eng" position_details="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship." position_skills="yii2,framwork7,reactjs"/>
      </section>
      <section id="projects">
            My Projects
      </section>
    </div>
  );
};

export default Right;
