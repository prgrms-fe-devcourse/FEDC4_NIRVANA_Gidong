import styled from '@emotion/styled';

const SignUpLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const SignUpInput = styled.input`
  width: 270px;
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
  color: ${({ theme }) => theme['redVivid']};
  margin-left: 10px;
`;

const SignUpSuccess = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme['greenVivid']};
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
  handleChange
}: Partial<UserInputProps>) => {
  return (
    <InputContainer>
      <SignUpLabel>
        {title}
        {success ? (
          <SignUpSuccess color={successColor}>{successMessage}</SignUpSuccess>
        ) : (
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
