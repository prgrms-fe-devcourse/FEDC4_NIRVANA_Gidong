import styled from '@emotion/styled';

const SignUpLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const SignUpInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 45px;
  padding-left: 10px;
  border: 0.5px solid #7e7e7e;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  margin: 10px 0;
`;

const SignUpError = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.redVivid};
  margin-left: 10px;
`;

const SignUpSuccess = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.greenVivid};
  margin-left: 10px;
`;

interface UserInputProps {
  name: string;
  type: string;
  success: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  title: string;
  errorMessage: string;
  successMessage: string;
  successColor: string;
  errorColor: string;
  show: boolean;
}

const UserInput = ({
  name,
  type = 'text',
  title,
  success,
  placeholder,
  errorMessage,
  successMessage,
  successColor,
  errorColor,
  show = false,
  handleChange
}: Partial<UserInputProps>) => {
  return (
    <InputContainer>
      <SignUpLabel>
        {title}
        {show && success && (
          <SignUpSuccess color={successColor}>{successMessage}</SignUpSuccess>
        )}
        {show && !success && (
          <SignUpError color={errorColor}>{errorMessage}</SignUpError>
        )}
      </SignUpLabel>
      <SignUpInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(event) => handleChange(event)}
      />
    </InputContainer>
  );
};

export default UserInput;
