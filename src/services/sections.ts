import { apiClient } from '@/lib/axios';

export interface Section {
    id: number;
    // TODO: Add the exact section type props returned from the server
    title: string;
    order: number;
    [key: string]: any;
}

export interface SectionsResponse {
    status: string;
    message: string;
    data: Section[];
}

export const fetchSections = async (): Promise<Section[]> => {
    // Replace '/sections' with the exact endpoint from Laravel routes
    const response = await apiClient.get<SectionsResponse>('/sections');
    return response.data.data;
};

export interface SectionResponse {
    status: string;
    message: string;
    data: Section;
}

export const fetchSectionByIdentifier = async (identifier: string): Promise<Section | null> => {
    try {
        const response = await apiClient.get<SectionResponse>(`/sections/${identifier}`);
        return response.data.data;
    } catch (error: any) {
        if (error.response?.status === 404) {
            return null;
        }
        throw error;
    }
};
