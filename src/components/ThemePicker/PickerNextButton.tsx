import { Icon } from '@components/Icon';
import { StyledNextButton } from './ThemePicker.style';
import { color } from '@styles/colors';

interface PickerNextButtonProps {
  color: keyof typeof color;
  clickNextButton: (move: number) => void;
}

const PickerNextButton = ({
  color = 'white',
  clickNextButton
}: PickerNextButtonProps) => {
  const handleClickButton = () => {
    clickNextButton(250);
  };

  return (
    <StyledNextButton onClick={handleClickButton}>
      <Icon
        name={'chevron_right'}
        size={50}
        color={color}
      />
    </StyledNextButton>
  );
};
export default PickerNextButton;
