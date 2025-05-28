import { ComponentType } from 'react';
import {
  FormControl,
  FormControlError,
  FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelperText,
} from '@/components/ui/form-control';
import { Controller, FieldValues, Path, Control, RegisterOptions } from 'react-hook-form';
import Input, { CustomInputProps } from '@/components/custom/Input';
import { IFormControlProps } from '@gluestack-ui/form-control/lib/types';
interface InputControllerProps<T extends FieldValues>
  extends Omit<CustomInputProps, 'onChangeText' | 'value'> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T, Path<T>>;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  helperText?: string;
  errorIcon?: ComponentType;
  errorText?: string;
  secureTextEntry?: boolean;
  inputProps?: CustomInputProps;
  formControlProps?: IFormControlProps;
  className?: string;
}
const InputController = <T extends FieldValues>({
  label,
  name,
  control,
  rules,
  isDisabled,
  isReadOnly,
  isRequired,
  helperText,
  errorIcon,
  errorText,
  secureTextEntry,
  className,
  formControlProps,
  ...inputProps
}: InputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
        <FormControl
          className={`${formControlProps?.className ?? ''} ${className ?? ''}`}
          isInvalid={invalid}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        >
          <FormControlLabel className="mb-2">
            <FormControlLabelText>{label}</FormControlLabelText>
          </FormControlLabel>
          <Input
            {...inputProps}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
          />
          {error && (
            <FormControlError className="mt-1">
              {errorIcon && <FormControlErrorIcon as={errorIcon} />}
              <FormControlErrorText>{errorText ?? error.message}</FormControlErrorText>
            </FormControlError>
          )}
          {helperText && (
            <FormControlHelper>
              <FormControlHelperText>{helperText}</FormControlHelperText>
            </FormControlHelper>
          )}
        </FormControl>
      )}
    />
  );
};

export default InputController;
