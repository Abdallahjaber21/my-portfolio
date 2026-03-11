import React from "react";
import { useSection } from "@/hooks/useSections";
import { parseSectionContent } from "@/lib/sectionParser";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectWebsiteCard from "@/components/cards/ProjectWebsiteCard";

const Projects: React.FC = () => {
    const { data: projectsSection, isLoading } = useSection('projects-section');

    if (isLoading) {
        return (
            <section id="projects" className="mt-20 xs:mt-10">
                <div className="font-bold mb-5 pt-2 text-2xl">Projects</div>
                <div className="text-muted">Loading projects...</div>
            </section>
        );
    }

    if (!projectsSection || !projectsSection.content) {
        return null;
    }

    return (
        <section id="projects" className="mt-20 xs:mt-10">
            <div className="font-bold mb-5 pt-2 text-2xl">Projects</div>
            {projectsSection.content.map((item: any, index: number) => {
                const { data, type } = item;

                const commonProps = {
                    title: data.project_title,
                    project_img: data.project_cover_image,
                    project_url: data.project_url,
                    project_skills: data.project_skills_tags,
                    project_screenshot: data.project_gallery?.map((g: any) => typeof g === 'string' ? g : Object.values(g)[0]),
                    project_details: data.project_details || data.project_description || "",
                    image_bg: data.image_bg || "transparent", // Provide a default if undefined in backend
                    orientation: data.orientation || "landscape", // assuming landscape by default
                };

                if (type === "project-website-card") {
                    return <ProjectWebsiteCard key={index} {...commonProps} />;
                }

                // Default to ProjectCard for "project-card" or any other value
                return <ProjectCard key={index} {...commonProps} />;
            })}
        </section>
    );
};

export default Projects;
