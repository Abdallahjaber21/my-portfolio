import { create } from 'zustand';

interface SectionState {
    activeSectionId: number | null;
    setActiveSectionId: (id: number | null) => void;
}

export const useSectionStore = create<SectionState>((set) => ({
    activeSectionId: null,
    setActiveSectionId: (id) => set({ activeSectionId: id }),
}));
