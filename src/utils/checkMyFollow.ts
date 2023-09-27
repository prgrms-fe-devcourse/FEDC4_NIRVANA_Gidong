import { Follow } from '@/types';

const checkMyFollow = (follows: Follow[], userId: string) => {
  if (follows && follows.length > 0 && userId) {
    return follows.some((follow) => follow.user === userId);
  }
};

export default checkMyFollow;
