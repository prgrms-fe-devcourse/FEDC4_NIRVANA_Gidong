import { SearchEditedPost, User } from '@/types';
import isPost from '../types/typeGuard';

const filterPostData = (
  resultData: (User | SearchEditedPost)[]
): SearchEditedPost[] => {
  return resultData.filter(isPost);
};

export default filterPostData;
