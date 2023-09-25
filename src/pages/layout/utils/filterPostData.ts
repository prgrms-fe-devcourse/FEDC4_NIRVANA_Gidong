import { User } from '@/types';
import { EditedPost } from '../types';
import isPost from '../types/typeGuard';

const filterPostData = (resultData: (User | EditedPost)[]): EditedPost[] => {
  return resultData.filter(isPost);
};

export default filterPostData;
