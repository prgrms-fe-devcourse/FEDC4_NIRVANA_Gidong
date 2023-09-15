import { Icon } from '@components/Icon';
import { PickerPreviousButtonContainer } from './ThemePicker.style';

const PickerPreviousButton = () => {
  return (
    <PickerPreviousButtonContainer>
      <Icon 
        name={'chevron_left'}
        size={25}
        color={'greyLight'}
      />
    </PickerPreviousButtonContainer>
  )
};
export default PickerPreviousButton;
