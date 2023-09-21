import { User, Post } from '@/types';
import isPost from '../types/typeGuard';

const filterPostData = (resultData: (User | Post)[]): Post[] => {
  return resultData.filter(isPost);
};

export default filterPostData;
