import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectsState } from '../types/types';


const initialState: ProjectsState = {
    active: 'All',
    isFeaturedFilter: true,
    hoveredIndex: -1,
    descriptionPosition: 'right',
    currentImageIndex: 0,
    isModalOpen: false,
    screenshots: [],
    loading: true,
    isDropdownOpen: false,
    videoUrl: '',
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setActive(state, action: PayloadAction<string>) {
            state.active = action.payload;
        },
        setIsFeaturedFilter(state, action: PayloadAction<boolean>) {
            state.isFeaturedFilter = action.payload;
        },
        setHoveredIndex(state, action: PayloadAction<number>) {
            state.hoveredIndex = action.payload;
        },
        setDescriptionPosition(state, action: PayloadAction<'right' | 'left' | 'bottom'>) {
            state.descriptionPosition = action.payload;
        },
        setCurrentImageIndex(state, action: PayloadAction<number>) {
            state.currentImageIndex = action.payload;
            console.log(state.currentImageIndex)
        },
        setIsModalOpen(state, action: PayloadAction<boolean>) {
            state.isModalOpen = action.payload;
        },
        setScreenshots(state, action: PayloadAction<string[]>) {
            state.screenshots = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setIsDropdownOpen(state, action: PayloadAction<boolean>) {
            state.isDropdownOpen = action.payload;
        },
        setVideoUrl(state, action: PayloadAction<string>) {
            state.videoUrl = action.payload;
        }
    }
});

export const {
    setActive,
    setIsFeaturedFilter,
    setHoveredIndex,
    setDescriptionPosition,
    setCurrentImageIndex,
    setIsModalOpen,
    setScreenshots,
    setLoading,
    setIsDropdownOpen,
    setVideoUrl
} = projectsSlice.actions;

export default projectsSlice.reducer;
