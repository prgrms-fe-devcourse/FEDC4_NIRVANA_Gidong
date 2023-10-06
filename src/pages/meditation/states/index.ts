import { atom } from 'recoil';

export const meditationTime = atom({
  key: 'meditationTime',
  default: 0
});

export const totalMeditationTime = atom({
  key: 'totalMeditationTime',
  default: 0
});

export const meditationStatus = atom({
  key: 'meditationStatus',
  default: { started: false, ended: false }
});
