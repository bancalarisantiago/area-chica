import InputController from '@/components/custom/InputController';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { useState, useMemo } from 'react';
import { Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/components/custom/Button';
const userSchema = z
  .object({
    name: z.string().min(8, { message: 'Name must be at least 8 characters' }),
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type UserSchema = z.infer<typeof userSchema>;
const SignUp = () => {
  const { signUp } = useSession();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid, disabled },
  } = useForm<UserSchema>({
    defaultValues: {
      name: '',
      password: '',
      email: '',
      confirmPassword: '',
    },
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data) => {
    console.log('Invoice Data:', getValues(), { data, errors, isValid, disabled }); // Log validated form data to the console

    await signUp(data.email, data.password);
    router.replace('/(app)/(tabs)/(home)');
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const eyeIcon = useMemo(
    () => (
      <Pressable onPress={handleShowPassword}>
        <Ionicons
          name={showPassword ? 'eye' : 'eye-off'}
          size={24}
          color="gray"
        />
      </Pressable>
    ),
    [showPassword],
  );

  return (
    <LinearGradient
      colors={['#FFFF', '#A8E6CF', '#3CB371']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Box className=" w-full p-10 opacity-80 rounded-xl gap-6">
        <Image
          className="w-80 h-64 mx-auto"
          source={require('../assets/images/logo-area-chica.png')}
        />
        <Text className="text-3xl font-bold mb-4 text-center">Crear Cuenta</Text>
        <InputController
          name="name"
          control={control}
          label="Nombre"
          type="text"
          placeholder="Juan Perez"
          errorText={errors?.name?.message}
        />
        <InputController
          name="email"
          control={control}
          label="Email"
          type="email"
          placeholder="KoKZq@example.com"
          errorText={errors?.email?.message}
        />
        <InputController
          name="password"
          control={control}
          label="Contraseña"
          secureTextEntry={!showPassword}
          placeholder="Ingresa tu contraseña"
          errorText={errors?.password?.message}
          slot={eyeIcon}
        />
        <InputController
          name="confirmPassword"
          control={control}
          label="Confirmar contraseña"
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirmar tu contraseña"
          errorText={errors?.confirmPassword?.message}
          slot={eyeIcon}
        />
      </Box>
      <Button
        text="Crear Cuenta"
        onPress={handleSubmit(onSubmit)}
      />
      <Text onPress={() => router.replace('/sign-in')}>Volver al Login</Text>
    </LinearGradient>
  );
};

export default SignUp;
