import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="bookings"
        options={{ title: 'Bookings' }}
      />
    </Tabs>
  );
};

export default TabsLayout;
