export interface ProjectWebsiteCardProps {
    project_skills?: string;
    project_screenshot?: string;
    project_img?: string;
    image_bg?: string;
    image_scalable_class?: string;
    project_url?: string;
    title?: string;
    project_details?: string;
    push_images_func?: (images: string[]) => void;
}
