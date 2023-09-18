import NoticeItem from '../NoticeItem/NoticeItem';

interface NoticeListProps {
  list: string[];
}

const NoticeList = ({ list }: NoticeListProps) => {
  return list.map((item, index) => (
    <NoticeItem
      item={item}
      key={index}
      profileImage={'https://avatars.githubusercontent.com/u/48426991?v=4'}
      active={false}
      type={'comment'}
      comment={'댓글입니다.'}
    />
  ));
};

export default NoticeList;
