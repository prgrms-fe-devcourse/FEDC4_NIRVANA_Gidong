import { useFormContext } from 'react-hook-form';
import {
  ErrorMessage,
  Input,
  InputContainer,
  Label,
  SuccessMessage,
  StyledTitle
} from './FormInput.style';

interface FormInputProps {
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

const FormInput = ({
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
}: Partial<FormInputProps>) => {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <Label>
        <StyledTitle>{title}</StyledTitle>
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
        {...register(name)}
      />
    </InputContainer>
  );
};

export default FormInput;
