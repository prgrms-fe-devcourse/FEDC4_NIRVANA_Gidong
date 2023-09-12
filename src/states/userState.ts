import { atom } from 'recoil';
import { User } from '../types';

type UserState = Pick<
  User,
  | '_id'
  | 'coverImage'
  | 'image'
  | 'fullName'
  | 'email'
  | 'role'
  | 'emailVerified'
  | 'banned'
  | 'createdAt'
  | 'updatedAt'
  | 'token'
>;

export const userState = atom<UserState | null>({
  key: 'currentUserState',
  default: null
});
