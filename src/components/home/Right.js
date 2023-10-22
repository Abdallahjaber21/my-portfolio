import React from "react";

const Right = () => {
  return (
    <div className="right_scrollable_section">
      <section id="about">
        <text className="text-muted text-sm mb-10 h-128">- Introduction</text>
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
          and integrating mobile technologies to enhance user experiences. Adept
          at utilizing version control systems and debugging tools to deliver
          high-quality solutions. Committed to continuous learning and growth in
          the ever-evolving tech landscape.
        </div>
      </section>
      <section id="experience" className="h-128">
            My experience
      </section>
      <section id="projects">
            My Projects
      </section>
    </div>
  );
};

export default Right;
