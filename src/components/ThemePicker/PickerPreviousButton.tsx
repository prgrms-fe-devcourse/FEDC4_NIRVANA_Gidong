import { Icon } from '@components/Icon';
import { PickerPreviousButtonContainer } from './ThemePicker.style';

interface PickerPreviousButtonProps {
  color: string;
  clickPrevButton: (move: number) => void;
}

const PickerPreviousButton = ({
  color = 'white',
  clickPrevButton
}: PickerPreviousButtonProps) => {
  const handleClickButton = () => {
    clickPrevButton(250);
  }

  return (
    <PickerPreviousButtonContainer onClick={handleClickButton}>
      <Icon
        name={'chevron_left'}
        size={50}
        color={color}
      />
    </PickerPreviousButtonContainer>
  );
};
export default PickerPreviousButton;
