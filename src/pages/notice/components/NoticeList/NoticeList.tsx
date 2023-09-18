import NoticeItem from '../NoticeItem/NoticeItem';
import { Notification } from '@/types/Notification';
interface NoticeListProps {
  list: Notification[];
}

const NoticeList = ({ list }: NoticeListProps) => {
  return list.map((notice) => (
    <NoticeItem
      authorName={notice.author.fullName}
      key={notice._id}
      profileImage={notice.author.image}
      seen={notice.seen}
      comment={notice.comment}
      type={'COMMENT'}
    />
  ));
};

export default NoticeList;
