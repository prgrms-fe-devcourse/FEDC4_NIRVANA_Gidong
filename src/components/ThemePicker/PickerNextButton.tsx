import { Icon } from '@components/Icon';
import { PickerNextButtonContainer } from './ThemePicker.style';

interface PickerNextButtonProps {
  color: string;
}

const PickerNextButton = ({ color = 'white' }: PickerNextButtonProps) => {
  return (
    <PickerNextButtonContainer>
      <Icon
        name={'chevron_right'}
        size={50}
        color={color}
      />
    </PickerNextButtonContainer>
  );
};
export default PickerNextButton;
