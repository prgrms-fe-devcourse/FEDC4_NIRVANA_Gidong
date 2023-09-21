import { Like } from '@/types/Like';

const checkLike = (likes: Like[], userId: string) => {
  if (!likes) return false;
  return likes.some((like) => like.user === userId);
};

export default checkLike;
