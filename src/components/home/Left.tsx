import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

const SECTIONS = ["about", "projects", "experience", "contact"] as const;

const Left: React.FC = () => {
    const { theme } = useTheme();
    const [activeSection, setActiveSection] = useState<string>("about");

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const offset = window.innerHeight * 0.3;

            // If near the bottom of the page, activate the last section
            const nearBottom = (window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 100);
            if (nearBottom) {
                setActiveSection(SECTIONS[SECTIONS.length - 1]);
                return;
            }

            let current: string = SECTIONS[0];

            for (const id of SECTIONS) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const top = rect.top + scrollY;
                    if (scrollY + offset >= top) {
                        current = id;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // run once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = (section: string, extraClasses: string = "") =>
        `section_link ${extraClasses} text-sm font-semibold rounded-full transition duration-200 all${activeSection === section ? " active" : ""}`;

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
                        <a href="#about" className={linkClass("about", "mb-2")}>
                            ABOUT
                        </a>
                        <a href="#projects" className={linkClass("projects", "mb-2")}>
                            PROJECTS
                        </a>
                        <a href="#experience" className={linkClass("experience", "mb-2")}>
                            EXPERIENCE
                        </a>
                        <a href="#contact" className={linkClass("contact")}>
                            CONTACT
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

                    <div className="mt-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            <div className={`left_static_section mobile_v hidden lg-break:block sticky top-0 z-10`}
                style={{ backgroundColor: 'var(--bg-mobile-nav)' }}>
                <nav className="navbar">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 pt-4 pb-4">
                        <div className="author-name text-5xl xl:text-3xl lg-break:text-3xl xs:text-xl lg:dash-after dash-animate">
                            Abdullah Jaber
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="links_list hidden md:flex gap-3">
                                <a href="#about" className={linkClass("about", "xs:text-xs")}>
                                    ABOUT
                                </a>
                                <a href="#projects" className={linkClass("projects", "xs:text-xs")}>
                                    PROJECTS
                                </a>
                                <a href="#experience" className={linkClass("experience", "xs:text-xs")}>
                                    EXPERIENCE
                                </a>
                            </div>
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Left;
