import { UserIdSpan } from './UserText.style';

interface UserIdInfo {
  email: string;
}

const UserId = ({ email }: UserIdInfo) => {
  const userId = email.split('@')[0];
  return <UserIdSpan>@{userId}</UserIdSpan>;
};

export default UserId;
