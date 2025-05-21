import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
const Bookings = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bookings</Text>
      <Text onPress={() => router.push('/(app)/(tabs)/(bookings)/test-book')}>TEST NESTED</Text>
    </View>
  );
};

export default Bookings;
