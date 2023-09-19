import { atom } from 'recoil';

export const endButtonPushed = atom({
  key: 'endButtonPushed',
  default: false
});

export const meditationTime = atom({
  key: 'meditationTime',
  default: 0
});
