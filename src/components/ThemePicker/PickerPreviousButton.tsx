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
  return (
    <PickerPreviousButtonContainer onClick={() => clickPrevButton(250)}>
      <Icon
        name={'chevron_left'}
        size={50}
        color={color}
      />
    </PickerPreviousButtonContainer>
  );
};
export default PickerPreviousButton;
