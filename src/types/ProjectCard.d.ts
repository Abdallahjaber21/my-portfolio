export interface ProjectCardProps {
    project_skills?: string;
    project_screenshot?: string;
    project_img?: string;
    image_bg?: string;
    image_scalable_class?: string;
    project_url?: string;
    title?: string;
    project_details?: string;
    orientation?: string;
    push_images_func?: (images: string[]) => void;
}
