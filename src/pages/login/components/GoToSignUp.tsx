import { Link } from '@components/Link';
import { Icon } from '@components/Icon';
import { MESSAGE, LABEL } from '../constants';
import {
  GoToSignUpContainer,
  Message,
  LinkContainer
} from './GoToSignUp.style';

const GoToSignUp = () => {
  return (
    <GoToSignUpContainer>
      <Message>{MESSAGE.GO_TO_SIGN_UP}</Message>
      <LinkContainer>
        <Icon
          name={'arrow_forward'}
          size={14}
          color={'redVivid'}
        />
        &nbsp;
        <Link
          color='black'
          pageLink={'/signup'}>
          {LABEL.SIGN_UP}
        </Link>
      </LinkContainer>
    </GoToSignUpContainer>
  );
};

export default GoToSignUp;
