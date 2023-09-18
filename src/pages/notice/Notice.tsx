import { useEffect, useState } from 'react';
import { getNotifications } from '@apis/notice';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import NoticeList from './components/NoticeList/NoticeList';
import { NoticePage, Header } from './Notice.style';

const Notice = () => {
  const [list, setList] = useState([]);
  const [userSessionData] = useSessionStorage<Pick<User, 'token' | '_id'>>(
    'userData',
    {
      token: '',
      _id: ''
    }
  );

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await getNotifications(userSessionData.token);
      setList(res);
    };

    fetchNotifications();

    const intervalId = setInterval(fetchNotifications, 3000);

    return () => clearInterval(intervalId);
  }, [userSessionData.token]);

  return (
    <NoticePage>
      <Header>알림창</Header>
      <NoticeList list={list} />
    </NoticePage>
  );
};

export default Notice;
