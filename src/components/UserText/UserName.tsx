import { UserNameSpan } from './UserName.style';

interface UserNameInfo {
  children: React.ReactNode;
}

const UserName = ({ children }: UserNameInfo) => {
  return <UserNameSpan>{children}</UserNameSpan>;
};

export default UserName;
