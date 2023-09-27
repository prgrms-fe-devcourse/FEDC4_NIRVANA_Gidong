import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@apis/notice';
import useSessionStorage from '@hooks/useSessionStorage';
import { Icon } from '@components/Icon';
import { DotBadge } from '@components/Badge';
import { User } from '@/types';
import { Button } from '@components/Button';

interface AlertButtonProps {
  handleClickAlert: () => void;
}

const AlertButton = ({ handleClickAlert }: AlertButtonProps) => {
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const location = useLocation();
  const { pathname } = location;
  const { token } = userSessionData;

  const query = useQuery({
    queryKey: ['headerAlert'],
    queryFn: async () => {
      const data = await getNotifications(`Bearer ${token}`);
      return data;
    },
    enabled: (token !== '' || !token) && pathname !== '/notice',
    refetchInterval: () => (pathname === '/notice' ? false : 5000),
    refetchIntervalInBackground: true
  });

  const { data } = query;
  const alertStatus = data?.filter(({ seen }) => !seen).length > 0;

  return (
    <DotBadge
      dot={alertStatus && pathname !== '/notice'}
      color='orange'
      position='top'
      badgeSize={5}>
      <Button
        width={25}
        height={25}
        handleClick={handleClickAlert}
        borderRadius={0}
        border='transparent'
        backgroundColor='transparent'>
        <Icon
          name='notifications'
          color='white'
          size={23}
        />
      </Button>
    </DotBadge>
  );
};

export default AlertButton;
