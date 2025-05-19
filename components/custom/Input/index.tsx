import { FC } from 'react';
import { Input as UIInput, InputField, InputIcon, InputSlot } from '@/components/ui/input';

export interface InputProps {
  icon?: any;
  slot?: any;
  type?: any;
  placeholder?: any;
  value?: any;
  onChangeText?: any;
}
const Input: FC<InputProps> = ({ icon, type, placeholder, value, onChangeText, slot }) => {
  return (
    <UIInput>
      <InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {icon && <InputIcon>{icon}</InputIcon>}
      {slot && <InputSlot>{slot}</InputSlot>}
    </UIInput>
  );
};

export default Input;
