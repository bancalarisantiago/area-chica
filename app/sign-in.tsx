import { router } from 'expo-router';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSession } from '../context/AuthContext';
import { Box } from '@/components/ui/box';
import { ImageBackground } from 'expo-image';
export default function SignIn() {
  const { signIn } = useSession();
  return (
    <LinearGradient
      colors={['#3CB371', '#A8E6CF', '#0077B6', '#023047']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ImageBackground source={require('../assets/images/area-foto-1.jpg')} />
      <Text
        className="text-2xl font-bold text-white"
        onPress={() => {
          signIn('bancalarisantiago@gmail.com', 'rtetes');
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/(app)/(tabs)/(home)');
        }}
      >
        Sign Inasdasdsadsa
      </Text>
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
