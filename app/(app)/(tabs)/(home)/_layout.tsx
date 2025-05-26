import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
export function GoBackButton() {
  const router = useRouter();
  if (!router.canGoBack()) return null;
  return (
    <Pressable
      onPress={() => router.back()}
      style={{ paddingHorizontal: 12 }}
    >
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
      />
    </Pressable>
  );
}
const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="fieldDetails/[id]"
        options={{
          title: 'Reservation',
          headerShown: true,
          headerShadowVisible: true,
          headerLeft: () => <></>,
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
