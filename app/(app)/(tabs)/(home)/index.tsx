import { Text, View, Pressable, Image, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { getAllFields } from '@/api/controllers/fields.controller';
import { Field } from '@/api/types/Field';
export const shadowStyle = {
  ...Platform.select({
    // ios: {
    //   shadowColor: '#000',
    //   shadowOffset: { width: 0, height: 4 },
    //   shadowOpacity: 0.1,
    //   shadowRadius: 6,
    // },
    android: {
      elevation: 8,
    },
  }),
  backgroundColor: 'white',
  borderRadius: 16,
};
const futbol = require('../../../../assets/images/area-foto-1.jpg');
const paddle = require('../../../../assets/images/foto-paddle-1.webp');
const FieldTypeCard = ({ className, type, description, image, price, name, id }) => {
  const router = useRouter();
  console.log('IDD', id);

  return (
    <Pressable
      onPress={() => router.push(`/fieldDetails/${id}`)}
      className="bg-white rounded-2xl p-4 m-4 shadow-sm flex-row items-center "
      style={shadowStyle}
    >
      <Image
        source={image}
        className="w-32 h-32 rounded-md mr-4"
      />
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-800">{name}</Text>

        <Text className="text-lg font-bold text-gray-600">{type}</Text>
        <Text className="text-sm text-gray-600">{description}</Text>
        {price && (
          <Text className="text-sm text-green-600 mt-1 font-semibold">Desde ${price}/h</Text>
        )}
      </View>
    </Pressable>
  );
};

const foto1 = require('../../../../assets/images/area-foto-1.jpg');
export default function Home() {
  const [fields, setFields] = useState<Field[]>([]);

  const getFields = async () => {
    console.log('Fetching fields...');
    try {
      const response = await getAllFields();
      setFields(response);
      console.log('Fields:', response);
    } catch (error) {
      console.log('Error fetching fields:', error);
    }
  };
  useEffect(() => {
    getFields();
  }, []);

  return (
    <ScrollView className="flex-1 gap-2">
      {/* {fields?.map((field) => (
        <FieldTypeCard
          id={field.id}
          key={field.id}
          name={field.name}
          image={field.image_url}
          price={field.price_per_hour}
          type={field.type}
          description={field.description}
        />
      ))} */}

      <FieldTypeCard
        name="Cancha 1"
        image={futbol}
        price={1200}
        type="Fútbol"
        description="Campo con césped sintético e iluminación LED"
        id="e7499f70-629c-4631-b497-3520384d7ca4"
      />
    </ScrollView>
  );
}
