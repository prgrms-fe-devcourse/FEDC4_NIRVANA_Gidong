import useSessionStorage from '@hooks/useSessionStorage';
import { User, Like } from '@/types';

const GetMyLike = (likes: Like[]): Like => {
  const [{ _id }] = useSessionStorage<Pick<User, '_id' | 'token'>>('userData', {
    _id: '',
    token: ''
  });

  if (!likes) return undefined;
  const myLike = likes.find((like) => like.user === _id);
  if (myLike) {
    return myLike;
  }
};

export default GetMyLike;
