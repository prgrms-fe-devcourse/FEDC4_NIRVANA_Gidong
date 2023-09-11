import {
  SignUpLabel,
  SignUpInput,
  InputContainer,
  SignUpError,
  SignUpSuccess
} from './UserInput.style';

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
