import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Left = () => {
  function checkActiveSection(event) {
    let links = document.getElementsByClassName("section_link");

    for (let index = 0; index < links.length; index++) {
      links[index].classList.remove("active");
    }

    event.target.classList.add("active");
  }

  return (
    <>
      <div className="left_static_section lg-break:hidden">
        <div
          className="content flex flex-col justify-between fixed lg-break:relative"
          style={{ height: "80vh" }}
        >
          <div className="author-name text-5xl xl:text-3xl lg-break:text-4xl dash-after dash-animate">
            Abdullah
            <br />
            Jaber Mohamad
          </div>
          <div className="links_list mt-10">
            <a
              href="#about"
              id="about-link"
              className="section_link mb-2 text-sm font-semibold rounded-full  transition duration-200 all active"
              onClick={(e) => checkActiveSection(e)}
            >
              ABOUT
            </a>
            <a
              href="#projects"
              id="projects-link"
              className="section_link mb-2 text-sm font-semibold rounded-full  transition duration-200 all"
              onClick={(e) => checkActiveSection(e)}
            >
              PROJECTS
            </a>
            <a
              href="#experience"
              id="experience-link"
              className="section_link mb-2  text-sm font-semibold rounded-full  transition duration-200 all"
              onClick={(e) => checkActiveSection(e)}
            >
              EXPERIENCE
            </a>
            <a
              href="#contact"
              id="contact-link"
              className="section_link  text-sm font-semibold rounded-full  transition duration-200 all"
              onClick={(e) => checkActiveSection(e)}
            >
              Contact
            </a>
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
      <div className="left_static_section mobile_v hidden lg-break:block sticky top-0 bg-primary z-10">
        <nav className="navbar">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 pt-4 pb-4">
            <div className="author-name text-5xl xl:text-3xl lg-break:text-3xl xs:text-xl lg:dash-after dash-animate">
              Abdullah Jaber
            </div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <div className="links_list flex gap-3">
                <a
                  href="#about"
                  id="about-link"
                  className="section_link text-sm font-semibold rounded-full  transition duration-200 all active xs:text-xs"
                  onClick={(e) => checkActiveSection(e)}
                >
                  ABOUT
                </a>
                <a
                  href="#projects"
                  id="projects-link"
                  className="section_link text-sm font-semibold rounded-full  transition duration-200 all xs:text-xs"
                  onClick={(e) => checkActiveSection(e)}
                >
                  PROJECTS
                </a>
                <a
                  href="#experience"
                  id="experience-link"
                  className="section_link text-sm font-semibold rounded-full  transition duration-200 all xs:text-xs"
                  onClick={(e) => checkActiveSection(e)}
                >
                  EXPERIENCE
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Left;
