
import { configureStore } from '@reduxjs/toolkit';
import PlaylistSlice from './PlaylistSlice.js';
import likedSlice from './LikedSlice.js';
export const store = configureStore({
    reducer:{
        playlist:PlaylistSlice,
        liked:likedSlice
    }
})