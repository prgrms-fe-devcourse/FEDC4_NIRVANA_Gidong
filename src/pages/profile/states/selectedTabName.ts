import { atom } from 'recoil';
import { PROFILE_TABS } from '../constants/profileTabs';

export const selectedTabNameState = atom({
  key: 'selectedTabName',
  default: PROFILE_TABS.MEDITATION
});
