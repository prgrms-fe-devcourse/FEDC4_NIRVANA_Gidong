import { Link } from '@components/Link';
import { Icon } from '@components/Icon';
import { DotBadge } from '@components/Badge';

const AlertButton = () => {
  return (
    <DotBadge
      dot={true}
      color='orange'
      position='top'
      badgeSize={5}>
      <Link
        pageLink='/alert'
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
