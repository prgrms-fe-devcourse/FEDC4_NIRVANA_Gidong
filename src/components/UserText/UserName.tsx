
import { UserNameSpan } from './UserText.style';

interface UserNameInfo {
  children: React.ReactNode;
}

const UserName = ({ children }: UserNameInfo) => {
  return <UserNameSpan>{children}</UserNameSpan>;
};

export default UserName;
