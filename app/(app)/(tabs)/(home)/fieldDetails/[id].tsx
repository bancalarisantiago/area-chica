import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { getFieldById as getFieldByIdController } from '@/api/controllers/fields.controller';
import { useLocalSearchParams } from 'expo-router';
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
  const [fieldDetails, setFieldDetails] = useState([]);
  const { id } = useLocalSearchParams();
  console.log('id', id);

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

  const getFieldById = async (id: string) => {
    try {
      const response = await getFieldByIdController(id);

      // setFieldDetails(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFieldById(id);
  }, []);

  return (
    <ScrollView className="flex-1 bg-white">
      <ImageBackground
        source={futbol}
        className="w-full h-[150px] justify-end"
      >
        <View className="bg-black/70 p-4 text-end ">
          <Text className="text-white text-2xl font-bold text-end">Cancha Sintética 1</Text>
        </View>
      </ImageBackground>

      <View className="p-5">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Fútbol 7 · $40/hora</Text>

        {/* Mes Selector */}
        <View className="mb-6">
          <Text className="text-base font-semibold text-gray-700 mb-2">Mes</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row"
          >
            {months.map((month, index) => (
              <TouchableOpacity
                key={month}
                onPress={() => setSelectedMonth(index)}
                className={`m-2 px-4 py-2 rounded-2xl shadow-sm ${
                  selectedMonth === index ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <Text
                  className={`text-sm font-semibold ${
                    selectedMonth === index ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {month.substring(0, 3)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Día Selector */}
        <View className="mb-6">
          <Text className="text-base font-semibold text-gray-700 mb-2">Seleccioná un día</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-3"
          >
            {days.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDayIndex(index)}
                className={`m-3 items-center px-3 py-2 rounded-2xl shadow-sm ${
                  selectedDayIndex === index ? 'bg-green-600' : 'bg-gray-100'
                }`}
              >
                <Text
                  className={`text-sm font-bold ${
                    selectedDayIndex === index ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  {item.day}
                </Text>
                <Text
                  className={`text-lg ${
                    selectedDayIndex === index ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Horarios */}
        <View className="mb-8">
          <Text className="text-base font-semibold text-gray-700 mb-2">Horarios disponibles</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-3"
          >
            {hours.map((time, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedHour(time)}
                className={`m-2 px-4 py-3 rounded-2xl shadow-sm ${
                  selectedHour === time ? 'bg-green-600' : 'bg-green-100'
                }`}
              >
                <Text
                  className={`text-base font-medium ${
                    selectedHour === time ? 'text-white' : 'text-green-800'
                  }`}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Botón Reservar */}
        <TouchableOpacity
          disabled={!isReadyToBook}
          className={`p-4 rounded-2xl items-center ${
            isReadyToBook ? 'bg-green-600' : 'bg-gray-300'
          }`}
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
