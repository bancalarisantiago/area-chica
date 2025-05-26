import { Tabs, useRouter, useNavigation } from 'expo-router';

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

// const GoBackButton = () => {
//   const router = useRouter();

//   return (
//     <Box className="flex self-end h-[80px] w-full">
//       <Text>Botton</Text>
//       <Button
//         title="BACK"
//         onPress={() => router.back()}
//       />
//       <Button
//         title="Sign Out"
//         onPress={() => console.log('Sign Out', router)}
//       />
//     </Box>
//   );
// };
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Fields',
          headerShown: true,
          headerShadowVisible: true,
          headerLeft: () => <GoBackButton />,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(bookings)"
        options={{
          title: 'Bookings',
          headerShown: true,
          headerShadowVisible: true,
          headerLeft: () => <GoBackButton />,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="calendar"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
