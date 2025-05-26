// app/(app)/(tabs)/bookings/index.tsx
import { router } from 'expo-router';
import { FlatList, Text, Pressable, View } from 'react-native';

const mockBookings = [
  {
    id: '1',
    type: 'Fútbol',
    field: 'Cancha 1',
    date: '2025-05-22',
    hour: '20:00',
    price: 8000,
    status: 'Confirmada',
  },
  {
    id: '2',
    type: 'Pádel',
    field: 'Cancha 2',
    date: '2025-05-23',
    hour: '18:00',
    price: 6000,
    status: 'Pendiente',
  },
];

export default function BookingsScreen() {
  return (
    <FlatList
      data={mockBookings}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => router.push(`/${item.id}`)}
          style={{
            backgroundColor: 'white',
            padding: 16,
            marginBottom: 12,
            borderRadius: 12,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
            {item.type} - {item.field}
          </Text>
          <Text>
            {item.date} • {item.hour}
          </Text>
          <Text>Precio: ${item.price}</Text>
          <Text style={{ color: item.status === 'Confirmada' ? 'green' : 'orange' }}>
            Estado: {item.status}
          </Text>
        </Pressable>
      )}
    />
  );
}
