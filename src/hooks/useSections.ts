import { useQuery } from '@tanstack/react-query';
import { fetchSections, fetchSectionByIdentifier, Section } from '@/services/sections';

export const useSections = () => {
    return useQuery<Section[]>({
        queryKey: ['sections'],
        queryFn: fetchSections,
        // Adjust staleTime based on how frequently data updates
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

export const useSection = (identifier: string) => {
    return useQuery<Section | null>({
        queryKey: ['section', identifier],
        queryFn: () => fetchSectionByIdentifier(identifier),
        staleTime: 5 * 60 * 1000,
        enabled: !!identifier, // Only fetch if identifier is provided
    });
};
