import {
  Label,
  Input,
  InputContainer,
  ErrorMessage,
  SuccessMessage
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
      <Label>
        {title}
        {show && success && (
          <SuccessMessage color={successColor}>{successMessage}</SuccessMessage>
        )}
        {show && !success && (
          <ErrorMessage color={errorColor}>{errorMessage}</ErrorMessage>
        )}
      </Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'off' : 'on'}
        onChange={(event) => handleChange(event)}
      />
    </InputContainer>
  );
};

export default UserInput;
