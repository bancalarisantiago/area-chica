import { Stack } from 'expo-router';
const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Home', headerShown: false }}
      />
      {/* <Stack.Screen
        name="fieldDetails/[id]"
        options={{ title: 'Field Detail' }}
      /> */}
    </Stack>
  );
};

export default HomeLayout;
