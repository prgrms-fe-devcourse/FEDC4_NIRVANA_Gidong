import styled from '@emotion/styled';
import Link from '@/components/Link';
import Icon from '@/components/Icon';
import { MESSAGE, LABEL } from '../constants';

const GoToSignUpContainer = styled.div`
  margin-top: 30px;
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
`;

const Message = styled.span`
  color: ${({ theme }) => theme.color.greyLight};
  font-size: 14px;
  margin-bottom: 10px;
`;

const LinkContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
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
