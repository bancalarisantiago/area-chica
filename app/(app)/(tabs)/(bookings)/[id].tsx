// app/(app)/(tabs)/bookings/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const mockBookingDetail = {
  id: '1',
  type: 'Fútbol',
  field: 'Cancha 1',
  date: '2025-05-22',
  hour: '20:00',
  duration: '1 hora',
  price: 8000,
  status: 'Confirmada',
  paymentMethod: 'Mercado Pago',
};

export default function BookingDetail() {
  const { id } = useLocalSearchParams();

  // En el futuro esto lo traes desde Supabase o API
  const booking = mockBookingDetail;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Detalle de Reserva</Text>
      <Text>Tipo: {booking.type}</Text>
      <Text>Cancha: {booking.field}</Text>
      <Text>Fecha: {booking.date}</Text>
      <Text>Hora: {booking.hour}</Text>
      <Text>Duración: {booking.duration}</Text>
      <Text>Precio: ${booking.price}</Text>
      <Text>Método de pago: {booking.paymentMethod}</Text>
      <Text
        style={{
          marginTop: 10,
          color: booking.status === 'Confirmada' ? 'green' : 'orange',
        }}
      >
        Estado: {booking.status}
      </Text>
    </View>
  );
}
