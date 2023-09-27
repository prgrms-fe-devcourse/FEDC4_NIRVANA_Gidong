import { UserNameSpan } from './UserName.style';

interface UserNameInfo {
  children: React.ReactNode;
  size?: number;
}

const UserName = ({ children, size = 16 }: UserNameInfo) => {
  return <UserNameSpan size={size}>{children}</UserNameSpan>;
};

export default UserName;
