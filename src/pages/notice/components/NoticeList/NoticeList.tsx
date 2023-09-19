import { Notification } from '@/types/Notification';
import NoticeItem from '../NoticeItem/NoticeItem';
import noticeTypeChecker from '@pages/notice/utils/noticeTypeChecker';

interface NoticeListProps {
  list: Notification[];
}

const NoticeList = ({ list }: NoticeListProps) => {
  return list.map((notice) => (
    <NoticeItem
      authorName={notice.author.fullName}
      key={notice._id}
      profileImage={notice.author.image}
      comment={notice.comment}
      type={noticeTypeChecker(notice)}
    />
  ));
};

export default NoticeList;
