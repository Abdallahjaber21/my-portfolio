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
              href="#experience"
              id="experience-link"
              className="section_link mb-2 text-sm font-semibold rounded-full  transition duration-200 all"
              onClick={(e) => checkActiveSection(e)}
            >
              EXPERIENCE
            </a>
            <a
              href="#projects"
              id="projects-link"
              className="section_link text-sm font-semibold rounded-full  transition duration-200 all"
              onClick={(e) => checkActiveSection(e)}
            >
              PROJECTS
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
        <nav class="navbar">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 pt-4 pb-4">
            <div className="author-name text-5xl xl:text-3xl lg-break:text-3xl dash-after dash-animate">
              Abdullah Jaber
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <div className="links_list flex gap-3">
                <a
                  href="#about"
                  id="about-link"
                  className="section_link text-sm font-semibold rounded-full  transition duration-200 all active"
                  onClick={(e) => checkActiveSection(e)}
                >
                  ABOUT
                </a>
                <a
                  href="#experience"
                  id="experience-link"
                  className="section_link text-sm font-semibold rounded-full  transition duration-200 all"
                  onClick={(e) => checkActiveSection(e)}
                >
                  EXPERIENCE
                </a>
                <a
                  href="#projects"
                  id="projects-link"
                  className="section_link text-sm font-semibold rounded-full  transition duration-200 all"
                  onClick={(e) => checkActiveSection(e)}
                >
                  PROJECTS
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
