import { Button as UIButton, ButtonText, ButtonIcon, ButtonSpinner } from '@/components/ui/button';

const Button = ({ text, icon, spinner, ...rest }) => {
  return (
    <UIButton
      className="bg-primary-500 text-white py-2 px-4 rounded-full"
      {...rest}
    >
      {text && <ButtonText>{text}</ButtonText>}
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {spinner && <ButtonSpinner />}
    </UIButton>
  );
};

export default Button;
