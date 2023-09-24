import { User } from '@/types';

const checkAuth = (userSessionData: Pick<User, '_id' | 'token'>): boolean => {
  if (userSessionData._id === null || userSessionData._id === '') {
    return false;
  }
  if (userSessionData.token === undefined || userSessionData.token === '') {
    return false;
  }
  return true;
};

export default checkAuth;
