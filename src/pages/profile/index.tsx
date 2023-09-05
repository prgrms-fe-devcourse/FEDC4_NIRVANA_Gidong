//필요한 데이터
//UserID, followers, followings, meditation횟수, posts
//내 프로필인지? => param으로 받은 id와 전역상태의 id가 같은지 비교
//최근 5개의 meditation기록 => 무한스크롤 => react-query
//DM아이콘 => DM페이지로 이동
//프로필 사진 => 프로필 사진 변경
//프로필 수정 버튼 => 프로필 수정 페이지로 이동

import { useParams } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <Avatar
      size={70}
      src='https://avatars.githubusercontent.com/u/48426991?v=4'
      alt='test'
    />
  );
};

export default Profile;
