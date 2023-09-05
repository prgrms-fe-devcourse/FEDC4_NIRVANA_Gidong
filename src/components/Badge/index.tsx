import styled from '@emotion/styled';

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Super = styled.sup`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 5px;
  background-color: #ff9900;
  color: #fff;
  &.dot {
    padding: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

interface BadgeProps {
  children: React.ReactNode;
  dot: boolean;
}

const Badge = ({ children, dot }: BadgeProps) => {
  return (
    <BadgeContainer>
      {children}
      {dot && <Super className='dot' />}
    </BadgeContainer>
  );
};

export default Badge;
