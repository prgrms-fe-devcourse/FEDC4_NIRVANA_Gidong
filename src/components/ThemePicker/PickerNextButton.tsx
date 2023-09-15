import { Icon } from '@components/Icon';
import { PickerNextButtonContainer } from './ThemePicker.style';

const PickerNextButton = () => {
  return (
    <PickerNextButtonContainer>
      <Icon 
        name={'chevron_right'}
        size={25}
        color={'greyLight'}
      />
    </PickerNextButtonContainer>
  )
};
export default PickerNextButton;
