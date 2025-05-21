import { Stack } from 'expo-router';
const BookingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Bookings',
        }}
      />
    </Stack>
  );
};

export default BookingsLayout;
