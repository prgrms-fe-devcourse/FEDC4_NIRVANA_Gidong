import { Icon } from '@components/Icon';
import { PickerNextButtonContainer } from './ThemePicker.style';

interface PickerNextButtonProps {
  color: string;
  clickNextButton: (move: number) => void;
}

const PickerNextButton = ({
  color = 'white',
  clickNextButton
}: PickerNextButtonProps) => {
  const handleClickButton = () => {
    clickNextButton(250);
  }

  return (
    <PickerNextButtonContainer onClick={handleClickButton}>
      <Icon
        name={'chevron_right'}
        size={50}
        color={color}
      />
    </PickerNextButtonContainer>
  );
};
export default PickerNextButton;
