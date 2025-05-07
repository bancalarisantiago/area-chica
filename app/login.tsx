import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '../context/AuthContext';

export default function SignIn() {
  const { signUp } = useSession();

  return (
    <View className="flex-1 justify-center items-center ">
      <Text
        onPress={() => {
          signUp('bancalarisantiago@gmail.com', 'test1234');
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}
      >
        Sign Up
      </Text>
    </View>
  );
}
