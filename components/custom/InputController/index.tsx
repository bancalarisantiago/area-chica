import { FC } from 'react';
import {
  FormControl,
  FormControlError,
  FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelperText,
} from '@gluestack-ui/themed';
import { Controller } from 'react-hook-form';

import Input, { InputProps } from '@/components/custom/Input';
interface InputControllerProps extends InputProps {
  label: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  helperText?: string;
  errorIcon?: any;
  errorText?: string;
  name: string;
  control: any;
  rules?: any;
  defaultValue?: any;
  register?: any;
  errors?: any;
  formState?: any;
}
const InputController: FC<InputControllerProps> = (props) => {
  const {
    control,
    formState,
    rules,
    name,
    label,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    helperText,
    errorIcon,
    errorText,
    ...rest
  } = props;

  const renderInput = ({ field: { onChange, value }, fieldState: { invalid } }) => (
    <FormControl
      isInvalid={invalid}
      isDisabled={isDisabled}
      isReadOnly={isDisabled}
      isRequired={isRequired}
    >
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Input
        {...props}
        onChangeText={onChange}
        value={value}
      />
      <FormControlHelper>
        <FormControlHelperText>{helperText}</FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        {errorIcon && <FormControlErrorIcon as={errorIcon} />}
        <FormControlErrorText>{errorText}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );

  return (
    <Controller
      control={control}
      name={name}
      render={renderInput}
      rules={rules}
      {...rest}
    />
  );
};

export default InputController;
