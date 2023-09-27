import { atom } from 'recoil';
import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';
import { CONCENTRATION_KEY } from '@pages/meditation/constants';

export const endButtonPushed = atom({
  key: 'endButtonPushed',
  default: false
});

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
