import { Tabs, useRouter } from 'expo-router';
import { Button, Text } from 'react-native';
import { Box } from '@/components/ui/box';

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Box className="flex self-end h-[80px] w-full">
      <Text>Botton</Text>
      <Button
        title="BACK"
        onPress={() => router.back()}
      />
      <Button
        title="Sign Out"
        onPress={() => console.log('Sign Out', router)}
      />
    </Box>
  );
};
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          headerShown: true,
          headerShadowVisible: true,
          // header: GoBackButton,
        }}
      />
      <Tabs.Screen
        name="(bookings)"
        options={{ title: 'Bookings' }}
      />
    </Tabs>
  );
};

export default TabsLayout;
