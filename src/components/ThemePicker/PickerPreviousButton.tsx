import { Icon } from '@components/Icon';
import { StyledPreviousButton } from './ThemePicker.style';
import { color } from '@styles/colors';

interface PickerPreviousButtonProps {
  color: keyof typeof color;
  clickPrevButton: (move: number) => void;
}

const PickerPreviousButton = ({
  color = 'white',
  clickPrevButton
}: PickerPreviousButtonProps) => {
  const handleClickButton = () => {
    clickPrevButton(250);
  };

  return (
    <StyledPreviousButton onClick={handleClickButton}>
      <Icon
        name={'chevron_left'}
        size={50}
        color={color}
      />
    </StyledPreviousButton>
  );
};
export default PickerPreviousButton;
