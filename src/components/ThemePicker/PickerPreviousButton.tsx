import { Icon } from '@components/Icon';
import { PickerPreviousButtonContainer } from './ThemePicker.style';

interface PickerPreviousButtonProps {
  color: string;
}

const PickerPreviousButton = ({ color = 'white' }: PickerPreviousButtonProps) => {
  return (
    <PickerPreviousButtonContainer>
      <Icon 
        name={'chevron_left'}
        size={50}
        color={color}
      />
    </PickerPreviousButtonContainer>
  )
};
export default PickerPreviousButton;
