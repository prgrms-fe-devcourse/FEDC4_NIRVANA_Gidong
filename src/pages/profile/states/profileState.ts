import { atom } from 'recoil';
import { User } from '@/types';

type ProfileState = Pick<
  User,
  | 'coverImage'
  | 'image'
  | 'isOnline'
  | 'posts'
  | 'followers'
  | 'followings'
  | 'fullName'
  | 'email'
>;

export const profileState = atom<ProfileState | null>({
  key: 'profileState',
  default: null
});
