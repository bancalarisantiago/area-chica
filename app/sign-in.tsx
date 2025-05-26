import { router } from 'expo-router';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSession } from '../context/AuthContext';
import { ImageBackground } from 'expo-image';
import InputController from '@/components/custom/InputController';
import { useForm } from 'react-hook-form';
import { Box } from '@/components/ui/box';
export default function SignIn() {
  const { signIn } = useSession();

  const { control, handleSubmit } = useForm();
  return (
    <LinearGradient
      colors={['#3CB371', '#A8E6CF', '#0077B6', '#023047']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ImageBackground source={require('../assets/images/area-foto-1.jpg')} />
      <Box className="gap-4 w-3/4">
        <InputController
          label="Email"
          control={control}
          name="email"
          placeholder="Email"
          type="email"
        />
        <InputController
          label="Password"
          control={control}
          name="password"
          placeholder="Password"
          type="password"
        />
        <Text
          className="text-2xl font-bold text-white"
          onPress={() => {
            signIn('bancalarisantiago@gmail.com', 'Test1234');
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            router.replace('/(app)/(tabs)/(home)');
          }}
        >
          Sign In
        </Text>
      </Box>
      <Text
        onPress={() => {
          router.replace('/sign-up');
        }}
      >
        Crear Cuenta
      </Text>
    </LinearGradient>
  );
}
