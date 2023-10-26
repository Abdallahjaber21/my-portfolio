import React from "react";
import ExperienceCard from "../cards/ExperienceCard";
import CV from '../../assets/my_cv.pdf';
import ProjectCard from "../cards/ProjectCard";

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
      <section id="experience" className="mt-20">
            <ExperienceCard from="2018" to="present" title="Lead Engineer . Codendot" company_url="https://www.codendot.com" position="Senior Engineer Eng" position_details="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship." position_skills="yii2,framwork7,reactjs,react native,php,mysql,db,angular"/>
            <ExperienceCard from="2018" to="present" title="Lead Engineer" position="Senior Engineer Eng" position_details="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship." position_skills="yii2,framwork7,reactjs"/>
            <ExperienceCard from="2018" to="present" title="Lead Engineer" position="Senior Engineer Eng" position_details="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship." position_skills="yii2,framwork7,reactjs"/>
      </section>
      <section id="resume" className="mt-20">
         <a href={CV} className="font-semibold flex gap-2 items-center">View Full Resume</a>
      </section>
      <section id="projects" className="mt-20">
           <ProjectCard title="Spotify Profile" project_img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=256&q=75" project_details="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more." />
           <ProjectCard title="Spotify Profile" project_img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=256&q=75" project_details="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more." project_skills="framework7,cordova,yii2,php,mysql" />
           <ProjectCard title="Spotify Profile" project_img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=256&q=75" project_details="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more." project_skills="framework7,cordova,yii2,php,mysql" />
           <ProjectCard title="Spotify Profile" project_img="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=256&q=75" project_details="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more." project_skills="framework7,cordova,yii2,php,mysql" />
      </section>
    </div>
  );
};

export default Right;
