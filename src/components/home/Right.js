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

        <div className="summary text-lg xl:text-base text-muted mt-2">
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
            <ExperienceCard from="Feb 2022" to="present" title="Full-Stack Developer . Codendot | Tripoli, Al Mina" company_url="https://www.codendot.com" position="Mid Senior Full-Stack Developer" position_details="Developed and maintained front-end/back-end web applications using a variety of languages and frameworks, including HTML, JavaScript, PHP, YII2, Magento and jQuery. Utilized MySQL, Firebase databases for efficient data storage, retrieval, and schema optimization for performance and scalability. Ensured cross-platform optimization and mobile responsiveness using CSS, SCSS, LESS, Bootstrap5, and Tailwind CSS for styling. Integrated mobile technologies such as React Native, Android Studio, Flutter, Cordova, Expo, and Framework7 to enhance mobile experiences. Employed version control systems like GitHub and GitLab for efficient collaboration and version management. Monitored and troubleshooted performance issues, utilizing debugging tools, advanced code logic, and tracking network requests. Integrated comprehensive work order management, role-based permissions, and team management functionalities based on project requirements to ensure efficient workflows" position_skills="yii2,framwork7,cordova,mysql,magento,wordpress"/>
            <ExperienceCard from="jan 2020" to="june 2022" title="Full-stack Developer . Freelance | Lebanon" position="Full-stack Developer" position_details="Wrote well-designed, testable, and efficient code using web development best practices. Created basic website layouts and user interfaces, integrating data from various back- end web services and databases. Integrated data from various back-end web services and databases, ensuring cross- browser compatibility of new features. Created and maintained software documentation, ensuring clear and up-to-date records. Collaborated with web designers to realize visual design intent and ensured responsive design across devices. Advocated for automation, Test Driven Development (TDD), Continuous Integration (CI), and Continuous Delivery (CD) to enhance product quality and detect bugs at an early stage" position_skills="reactjs,angular,shopify,firebase,react native,flutter,vue js,mongo db,liquid,dart"/>
            <ExperienceCard from="Jan 2020" to="June 2021" title="Project Coordinator . Lamar Jewelry | Tripoli, Koura" position="Project Coordinator" position_details="Coordinated the implementation and customization of the Odoo point-of-sale system. Utilized Odoo functionalities to handle customer service, inquiries, and sales transactions. Conducted inventory management, meticulously organizing products based on item codes within the Odoo system. Leveraged Odoo's capabilities to provide clients with comprehensive product information, optimizing the overall customer experience. Collaborated closely with the development team to enhance the Odoo point-of-sale module for more efficient sales operations, thereby contributing to the successful achievement of sales targets." position_skills="odoo,management"/>
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
