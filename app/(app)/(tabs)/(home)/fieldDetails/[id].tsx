import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
const futbol = require('../../../../../assets/images/area-foto-1.jpg');
const hours = Array.from({ length: 15 }, (_, i) => {
  const hour = i + 10;
  return hour < 12 ? `${hour}:00 AM` : `${hour === 12 ? 12 : hour - 12}:00 PM`;
});
const days = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  const dayLetter = ['D', 'L', 'M', 'M', 'J', 'V', 'S'][date.getDay()];
  return { day: dayLetter, date: date.getDate() };
});
export default function FieldDetailScreen() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const selectedDay = days[selectedDayIndex];
  const isReadyToBook = selectedDay && selectedHour !== null;

  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-[#d7f2cf] to-[#eafbe3]">
      <ImageBackground
        source={futbol}
        className="w-full h-52 justify-end"
        imageStyle={{ resizeMode: 'cover' }}
      >
        <View className="bg-black/40 p-3">
          <Text className="text-white text-2xl font-bold">Cancha Sintética 1</Text>
        </View>
      </ImageBackground>

      <View className="p-5">
        <Text className="text-lg mb-5 font-semibold text-gray-800">Fútbol 7 · $40/hora</Text>

        {/* Selector de Mes */}
        <View className="mb-5">
          <Text className="text-base font-semibold mb-2 text-gray-900">Mes</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-3"
          >
            {months.map((month, index) => (
              <TouchableOpacity
                key={month}
                onPress={() => setSelectedMonth(index)}
                className={`px-4 py-2 rounded-full ${selectedMonth === index ? 'bg-green-600' : 'bg-gray-300'}`}
              >
                <Text
                  className={`text-sm font-semibold ${selectedMonth === index ? 'text-white' : 'text-black'}`}
                >
                  {month}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Calendario de días con scroll horizontal */}
        <View className="mb-5">
          <Text className="text-base font-semibold mb-3 text-gray-900">Seleccioná un día</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-3"
          >
            {days.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDayIndex(index)}
                className={`items-center px-3 py-2 rounded-lg ${selectedDayIndex === index ? 'bg-green-600' : 'bg-gray-200'}`}
              >
                <Text
                  className={`text-sm font-bold ${selectedDayIndex === index ? 'text-white' : 'text-gray-600'}`}
                >
                  {item.day}
                </Text>
                <Text
                  className={`text-base ${selectedDayIndex === index ? 'text-white' : 'text-black'}`}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Horarios disponibles en scroll horizontal */}
        <View className="mb-8">
          <Text className="text-base font-semibold mb-3 text-gray-900">Horarios disponibles</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-3"
          >
            {hours.map((time, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedHour(time)}
                className={`px-4 py-3 rounded-lg ${selectedHour === time ? 'bg-green-600' : 'bg-green-200'}`}
              >
                <Text
                  className={`text-base ${selectedHour === time ? 'text-white' : 'text-black'}`}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity
          disabled={!isReadyToBook}
          className={`p-4 rounded-xl items-center ${isReadyToBook ? 'bg-green-600' : 'bg-gray-300'}`}
        >
          <Text className={`text-base font-bold ${isReadyToBook ? 'text-white' : 'text-gray-600'}`}>
            {isReadyToBook
              ? `Reservar ${selectedHour} del ${selectedDay.date} de ${months[selectedMonth]}`
              : 'Seleccioná día y horario'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
