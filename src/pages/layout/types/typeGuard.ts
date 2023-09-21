import { User, Post } from '@/types';

const isPost = (arg: User | Post): arg is Post => {
  return 'title' in arg;
};

export default isPost;
