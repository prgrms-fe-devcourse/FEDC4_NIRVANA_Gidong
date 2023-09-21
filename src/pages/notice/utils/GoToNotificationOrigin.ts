import { NOTICE_TYPE } from '../constants';
import { useNavigate } from 'react-router-dom';

interface goToNotificationOriginProps {
  type: string;
  id: string;
}

const GoToNotificationOrigin = ({ type, id }: goToNotificationOriginProps) => {
  const navigate = useNavigate();
  // TODO: 각 알림의 타입에 따라 해당 알림의 원본으로 이동하는 로직 구현
  switch (type) {
    case NOTICE_TYPE.COMMENT:
      navigate(`/post/${id}`);
      return;
    case NOTICE_TYPE.LIKE:
      navigate(`/post/${id}`);
      return;
    case NOTICE_TYPE.FOLLOW:
      navigate(`/profile/${id}`);
      return;
    default:
      return;
  }
};

export default GoToNotificationOrigin;
