import React from "react";
import { useSection } from "@/hooks/useSections";
import ExperienceCard from "@/components/cards/ExperienceCard";

const Experience: React.FC = () => {
    const { data: experienceSection, isLoading } = useSection('experience-section');

    if (isLoading) {
        return (
            <section id="experience" className="mt-20 xs:mt-10">
                <div className="font-bold mb-5 pt-2 text-2xl">Experience</div>
                <div className="text-muted">Loading experience...</div>
            </section>
        );
    }

    if (!experienceSection || !experienceSection.content) {
        return null;
    }

    return (
        <section id="experience" className="mt-20 xs:mt-10">
            <div className="font-bold mb-5 pt-2 text-2xl">Experience</div>
            {experienceSection.content.map((item: any) => {
                const { data, type } = item;

                if (type === "experience-card") {
                    return data.experience_cards?.map((card: any, cardIndex: number) => {
                        const [from, to] = card.start_end_date?.split(" - ") || ["", ""];

                        // Handle pre tags in description if necessary, or just strip them if backend provides too much wrapper
                        let details = card.position_description;
                        if (details?.includes('<pre><code>')) {
                            details = details.replace('<pre><code>', '').replace('</code></pre>', '');
                        }

                        // Decode HTML entities (e.g., &lt; to <)
                        const decodeHtml = (html: string) => {
                            const txt = document.createElement("textarea");
                            txt.innerHTML = html;
                            return txt.value;
                        };

                        details = decodeHtml(details);

                        // If the user pasted React code with className, convert to class for standard HTML rendering
                        details = details.replace(/className=/g, 'class=');

                        return (
                            <ExperienceCard
                                key={`${cardIndex}`}
                                from={from}
                                to={to}
                                title={card.position_title}
                                company_url={card.company_url}
                                position={card.company_name}
                                position_details={details}
                                position_skills={card.experience_skills}
                            />
                        );
                    });
                }

                return null;
            })}
        </section>
    );
};

export default Experience;
