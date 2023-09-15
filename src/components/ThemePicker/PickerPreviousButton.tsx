import { Icon } from '@components/Icon';
import { PickerPreviousButtonContainer } from './ThemePicker.style';

interface PickerPreviousButtonProps {
  color: string;
  clickPrevButton: () => void;
}

const PickerPreviousButton = ({ color = 'white', clickPrevButton }: PickerPreviousButtonProps) => {
  return (
    <PickerPreviousButtonContainer onClick={clickPrevButton}>
      <Icon 
        name={'chevron_left'}
        size={50}
        color={color}
      />
    </PickerPreviousButtonContainer>
  )
};
export default PickerPreviousButton;
