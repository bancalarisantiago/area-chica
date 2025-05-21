import InputController from '@/components/custom/InputController';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from '@/context/AuthContext';
const userSchema = z.object({
  name: z.string().min(8, { message: 'Name must be at least 8 characters' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});

export type UserSchema = z.infer<typeof userSchema>;
const SignUp = () => {
  const { signUp } = useSession();
  const router = useRouter();

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

  return (
    <>
      <Box className="flex flex-col p-20">
        <InputController
          name="name"
          control={control}
          label="Name"
          type="text"
          placeholder="John Doe"
          helperText={errors?.name?.message}
        />
        <InputController
          name="email"
          control={control}
          label="Email"
          type="email"
          placeholder="KoKZq@example.com"
          helperText={errors?.email?.message}
        />
        <InputController
          name="password"
          control={control}
          label="Password"
          type="password"
          placeholder=""
          helperText={errors?.password?.message}
        />
      </Box>
      <Text onPress={() => router.replace('/sign-in')}>Login</Text>
      <Text
        onPress={handleSubmit(onSubmit)}
        className="text-blue-500 mt-4"
      >
        SUBMIT
      </Text>
      <Text
        onPress={onSubmit}
        className="text-blue-500 mt-4"
      >
        DATA
      </Text>
    </>
  );
};

export default SignUp;
