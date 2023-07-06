import { ImageType } from '../interfaces/images.interface';

export type PhotosState = {
    fetching: boolean;
    error: any;
    photos: ImageType[];
    getAllPhotos: ()=> void;
}