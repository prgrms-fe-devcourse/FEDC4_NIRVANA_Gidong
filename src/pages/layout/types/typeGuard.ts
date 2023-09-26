import { User } from '@/types';
import { SearchEditedPost } from '@/types';

const PROPERTY = 'title';

const isPost = (arg: User | SearchEditedPost): arg is SearchEditedPost => {
  return PROPERTY in arg;
};

export default isPost;
