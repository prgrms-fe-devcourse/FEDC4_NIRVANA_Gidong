import { NoticePage, Header } from './Notice.style';
import NoticeList from './components/NoticeList/NoticeList';

const list = [
  '혜성상회님이 댓글을 달았습니다.',
  '혜성상회님이 댓글을 달았습니다.',
  '혜성상회님이 댓글을 달았습니다.',
  '혜성상회님이 댓글을 달았습니다.',
  '혜성상회님이 댓글을 달았습니다.'
];

const Notice = () => {
  return (
    <NoticePage>
      <Header>알림창</Header>
      <NoticeList list={list} />
    </NoticePage>
  );
};

export default Notice;
