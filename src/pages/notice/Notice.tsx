import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getNotifications, putNotifications } from '@apis/notice';
import { Button } from '@components/Button';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import { Notification } from '@/types/Notification';
import NoticeList from './components/NoticeList/NoticeList';
import { NoticePage, Header, ReadButtonContainer } from './Notice.style';

const Notice = () => {
  const [list, setList] = useState([]);
  const [userSessionData] = useSessionStorage<Pick<User, 'token' | '_id'>>(
    'userData',
    {
      token: '',
      _id: ''
    }
  );

  const fetchNotifications = async () => {
    const res = await getNotifications(`Bearer ${userSessionData.token}`).then(
      (res) => res.filter((item: Notification) => !item.seen)
    );
    setList(res);
    return res;
  };

  useQuery({
    queryKey: ['notifications'],
    queryFn: () => fetchNotifications(),
    refetchInterval: 3000
  });

  return (
    <NoticePage>
      <Header>
        알림창
        {list.length > 0 && (
          <ReadButtonContainer>
          <Button
              width={80}
              height={30}
              borderRadius={10}
            fontSize={14}
            label='모두 읽음'
              handleClick={async () => {
                await putNotifications(`Bearer ${userSessionData.token}`);
                fetchNotifications();
              }}
            />
        )}
        </ReadButtonContainer>
      </Header>
      {list.length < 1 && <div>알림이 없습니다.</div>}
      <NoticeList list={list} />
    </NoticePage>
  );
};

export default Notice;
