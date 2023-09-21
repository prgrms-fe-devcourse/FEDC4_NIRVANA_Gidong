import { User, Post } from '@/types';

const isPost = (arg: User | Post): arg is Post => {
  if ('title' in arg) {
    return arg.title !== undefined;
  }
};

export default isPost;
