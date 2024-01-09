import { atom } from 'recoil';

export const meditationTime = atom({
  key: 'meditationTime',
  default: 0
});

export const totalMeditationTime = atom({
  key: 'totalMeditationTime',
  default: 0
});

export const intervalId = atom({
  key: 'intervalId',
  default: 0
});
