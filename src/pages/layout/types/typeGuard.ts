import { User } from '@/types';
import { EditedPost } from './index';

const PROPERTY = 'title';

const isPost = (arg: User | EditedPost): arg is EditedPost => {
  return PROPERTY in arg;
};

export default isPost;
