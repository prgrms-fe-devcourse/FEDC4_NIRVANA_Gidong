import { PasswordHintContainer } from './PasswordHint.style';

interface PasswordHintProps {
  text: string;
  fontSize: number;
  color: string;
}

const PasswordHint = ({
  text,
  fontSize,
  color
}: Partial<PasswordHintProps>) => {
  return (
    <PasswordHintContainer
      color={color}
      fontSize={fontSize}>
      {text}
    </PasswordHintContainer>
  );
};

export default PasswordHint;
