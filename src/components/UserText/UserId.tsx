import { UserIdSpan } from './UserId.style';

interface UserIdInfo {
  email: string;
  size?: number;
}

const UserId = ({ email, size = 16 }: UserIdInfo) => {
  const userId = email.split('@')[0];
  return <UserIdSpan size={size}>@{userId}</UserIdSpan>;
};

export default UserId;
