import { create } from 'zustand';
import { PhotosState } from '../core/store-models/photos';
import { getAllPhotos } from '../services/photos';

const userActions = (set: any): any => ({
  getAllPhotos: async () => {
    try {
      set({
        fetching: true,
        error: null,
      });
      const photos = await getAllPhotos();
      set({
        fetching: false,
        photos,
        error: null,
      });
    } catch (error) {
      set({
        fetching: false,
        photos: [],
        error,
      });
    }
  },
});

export const usePhotosStore = create<PhotosState>((set) => ({
  fetching: false,
  error: null,
  photos: [],
  ...userActions(set),
}));
