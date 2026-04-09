import { createWithEqualityFn } from 'zustand/traditional';

interface DlnaDurationState {
    /** Device-reported duration in ms, or null if not available */
    dlnaDuration: null | number;
    setDlnaDuration: (duration: null | number) => void;
}

export const useDlnaDurationStore = createWithEqualityFn<DlnaDurationState>()((set) => ({
    dlnaDuration: null,
    setDlnaDuration: (duration: null | number) => {
        set({ dlnaDuration: duration });
    },
}));

export const setDlnaDuration = (duration: null | number) => {
    useDlnaDurationStore.getState().setDlnaDuration(duration);
};

export const useDlnaDuration = () => {
    return useDlnaDurationStore((state) => state.dlnaDuration);
};
