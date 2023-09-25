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
          key={notice._id}
          profileImage={notice.author.image}
          type={noticeTypeChecker(notice)}
          comment={notice.comment}
          authorName={notice.author.fullName}
          postId={notice.post}
          followId={notice.follow}
        />
      ))}
    </NoticeListContainer>
  );
};

export default NoticeList;
