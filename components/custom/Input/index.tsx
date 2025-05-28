import {
  IInputFieldProps,
  InputField,
  InputIcon,
  InputSlot,
  Input as InputUI,
} from '@/components/ui/input';
import { FC, ReactNode } from 'react';

export interface CustomInputProps extends IInputFieldProps {
  icon?: ReactNode;
  slot?: ReactNode;
  field?: IInputFieldProps;
}

const Input: FC<CustomInputProps> = ({ icon, slot, field, key, className, ...rest }) => {
  return (
    <InputUI>
      <InputField
        {...rest}
        {...field}
        className={className}
      />
      {icon && <InputIcon>{icon}</InputIcon>}
      {slot && <InputSlot>{slot}</InputSlot>}
    </InputUI>
  );
};

export default Input;
