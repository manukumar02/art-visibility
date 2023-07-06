import axios from 'axios';
import { ImageType } from '../core/interfaces/images.interface';

export const getAllPhotos = async (): Promise<ImageType[]>=> {
    const {data} = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=100');
    return data.photos;
}