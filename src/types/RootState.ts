import { AllOutfitsState } from 'app/containers/AllOutfits/types';
import { OutfitPageState } from 'app/containers/OutfitPage/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  allOutfits?: AllOutfitsState;
  outfitPage?: OutfitPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
