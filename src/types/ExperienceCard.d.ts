export interface ExperienceCardProps {
    from?: string;
    to?: string;
    title?: string;
    company_url?: string;
    position?: string;
    position_details?: React.ReactNode | string;
    position_skills?: string | string[];
}
