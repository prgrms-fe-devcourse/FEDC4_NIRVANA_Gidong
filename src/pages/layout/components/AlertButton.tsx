import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@apis/notice';
import useSessionStorage from '@hooks/useSessionStorage';
import { Link } from '@components/Link';
import { Icon } from '@components/Icon';
import { DotBadge } from '@components/Badge';
import { User } from '@/types';

const AlertButton = () => {
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
    refetchInterval: () => (pathname === '/notice' ? false : 5000),
    refetchIntervalInBackground: true
  });

  const { data } = query;
  const alertStatus = data?.length > 0;

  return (
    <DotBadge
      dot={alertStatus}
      color='orange'
      position='top'
      badgeSize={5}>
      <Link
        pageLink='/notice'
        size={23}>
        <Icon
          name='notifications'
          color='white'
          size={23}
        />
      </Link>
    </DotBadge>
  );
};

export default AlertButton;
