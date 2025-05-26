import { Text, View, Pressable, ImageBackground, Image, Platform } from 'react-native';
import { useRouter } from 'expo-router';

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
const FieldTypeCard = ({ className, type, description, image, price }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/fieldDetails/1`)}
      className="bg-white rounded-2xl p-4 m-4 shadow-sm flex-row items-center "
      style={shadowStyle}
    >
      <Image
        source={image}
        className="w-32 h-32 rounded-md mr-4"
      />
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-800">{type}</Text>
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
  return (
    <View className="flex-1 gap-4">
      <FieldTypeCard
        image={foto1}
        price="50000"
        type="Futbol 6"
        description="Cocina profesional"
      />
      <FieldTypeCard
        image={require('../../../../assets/images/area-foto-1.jpg')}
        price="25000"
        type="Futbol 5"
        description="Cocina profesional"
      />
      <FieldTypeCard
        image={require('../../../../assets/images/foto-paddle-1.webp')}
        price="25000"
        type="Paddle"
        description="Cocina profesional"
      />
    </View>
  );
}
