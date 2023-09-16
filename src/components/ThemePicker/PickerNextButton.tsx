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
  return (
    <PickerNextButtonContainer onClick={() => clickNextButton(250)}>
      <Icon
        name={'chevron_right'}
        size={50}
        color={color}
      />
    </PickerNextButtonContainer>
  );
};
export default PickerNextButton;
