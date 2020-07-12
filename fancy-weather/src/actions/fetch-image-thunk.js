import { setRequstedActionCreator, setLoadedActionCreator } from './action-creators';
import { IMAGE_REQUESTED, IMAGE_LOADED, IMAGE_ERROR } from './action-types';
import ImageService from '../services/image-service';


const fetchImage = (query) => (dispatch) => {
  dispatch(setRequstedActionCreator(IMAGE_REQUESTED));
  const imageService = new ImageService(query);
  imageService.getLinkToImage()
    .then((data) => {
      const img = new Image();
      img.src = data;
      img.onload = () => {
        dispatch(setLoadedActionCreator(IMAGE_LOADED, data));
      };
    })
    .catch((err) => {
      dispatch(setLoadedActionCreator(IMAGE_ERROR, err));
    });
};

export default fetchImage;
