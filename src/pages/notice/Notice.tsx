import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { getNotifications, putNotifications } from '@apis/notice';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import { Notification } from '@/types/Notification';
import NoticeList from './components/NoticeList/NoticeList';
import { NoticePage, Header } from './Notice.style';
import { Button } from '@components/Button';
import { readAlert } from './states/readAlert';

const Notice = () => {
  const [list, setList] = useState([]);
  const [userSessionData] = useSessionStorage<Pick<User, 'token' | '_id'>>(
    'userData',
    {
      token: '',
      _id: ''
    }
  );

  const [, setReadStatus] = useRecoilState(readAlert);

  const fetchNotifications = async () => {
    const res = await getNotifications(`Bearer ${userSessionData.token}`).then(
      (res) => res.filter((item: Notification) => !item.seen)
    );
    setReadStatus(res.length > 0);
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
        <Button
          width={80}
          height={30}
          label='모두 읽음'
          handleClick={async () => {
            await putNotifications(`Bearer ${userSessionData.token}`);
            await fetchNotifications();
          }}
        />
      </Header>
      {list.length < 1 && <div>알림이 없습니다.</div>}
      <NoticeList list={list} />
    </NoticePage>
  );
};

export default Notice;
