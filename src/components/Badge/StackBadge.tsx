import { StackBadgeContainer } from './StackBadge.style';

interface StackBadgeProps {
  stack: number;
}

export const StackBadge = ({ stack }: StackBadgeProps) => {
  return <StackBadgeContainer>+{stack}D</StackBadgeContainer>;
};

export default StackBadge;
