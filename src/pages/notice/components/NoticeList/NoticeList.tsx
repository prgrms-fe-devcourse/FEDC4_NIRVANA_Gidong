import { Notification } from '@/types/Notification';
import NoticeItem from '../NoticeItem/NoticeItem';
import noticeTypeChecker from '@pages/notice/utils/noticeTypeChecker';
import NoticeListContainer from './NoticeList.style';

interface NoticeListProps {
  list: Notification[];
}

const NoticeList = ({ list }: NoticeListProps) => {
  return (
    <NoticeListContainer>
      {list.map((notice) => (
        <NoticeItem
          authorName={notice.author.fullName}
          key={notice._id}
          profileImage={notice.author.image}
          comment={notice.comment}
          type={noticeTypeChecker(notice)}
        />
      ))}
    </NoticeListContainer>
  );
};

export default NoticeList;
