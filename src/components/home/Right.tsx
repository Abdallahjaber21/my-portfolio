import { useSection } from "@/hooks/useSections";
import { parseSectionContent } from "@/lib/sectionParser";
import Experience from "./Experience";
import Contact from "./Contact";

import Projects from "./Projects";
import CV from "@/assets/my_cv.pdf";

const Right: React.FC = () => {

    const { data: introSection, isLoading: isLoadingIntro } = useSection('introduction-section');

    return (
        <div className="right_scrollable_section w-3/5 lg-break:w-full overflow-hidden">
            <section id="about">
                {isLoadingIntro ? (
                    <div className="text-muted">Loading...</div>
                ) : introSection ? (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: parseSectionContent(introSection.content),
                        }}
                    />
                ) : (
                    <div>
                        no data
                    </div>
                )}
            </section>
            <Projects />
            <Experience />
            <section id="resume" className="mt-20 xs:mt-10">
                <a href={CV} className="font-semibold flex gap-2 items-center">
                    View Full Resume
                </a>
            </section>
            <section id="contact" className="mt-20 xs:mt-10">
                <Contact />
            </section>
        </div>
    );
};

export default Right;
