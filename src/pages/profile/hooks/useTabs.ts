import { useState } from 'react';

interface Tab {
  tabName: string;
  title: string;
}

type HandleTabClick = (tabName: string) => void;

export const useTabs = (tabs: Tab[]): [string, HandleTabClick] => {
  const [selectedTabName, setSelectedTabName] = useState(tabs[0].tabName);

  const handleTabClick: HandleTabClick = (tabName) => {
    tabs.forEach((tab) => {
      if (tab.tabName === tabName) {
        setSelectedTabName(tab.tabName);
      }
    });
  };

  return [selectedTabName, handleTabClick];
};
