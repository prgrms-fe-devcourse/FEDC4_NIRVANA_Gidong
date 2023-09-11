import styled from '@emotion/styled';
import Link from '@/components/Link';
import Icon from '@/components/Icon';
import { MESSAGE, LABEL } from '../constants';

const GoToSignUpContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyLight};
  margin-bottom: 10px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoSignUp = () => {
  return (
    <GoToSignUpContainer>
      <Message>{MESSAGE.GO_TO_SIGN_UP}</Message>
      <LinkContainer>
        <Icon
          name={'arrow_forward'}
          size={14}
          color={'red'}
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

export default GoSignUp;
