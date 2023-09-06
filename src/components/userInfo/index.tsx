interface UserInfoProps {
  userId: string;
  nickName: string;
  avatarImgSrc: string;
  meditationStack: number;
  followNumber: number;
  followerNumber: number;
  totalMeditation: number;
}

const UserInfo = ({
  userId,
  nickName,
  avatarImgSrc,
  meditationStack,
  followNumber,
  followerNumber,
  totalMeditation
}: UserInfoProps) => {
  return <div></div>;
};

export default UserInfo;
