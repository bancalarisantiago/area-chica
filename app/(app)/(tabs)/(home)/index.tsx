import { Text, View, Pressable, ImageBackground } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

const futbol = require('../../../../assets/images/area-foto-1.jpg');
const paddle = require('../../../../assets/images/foto-paddle-1.webp');
const FieldTypeCard = ({ className, type, description, image, price }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/fieldDetails/1`)}
      className="bg-white rounded-2xl p-4 m-4 shadow-sm flex-row items-center"
    >
      <ImageBackground
        source={image}
        className="w-16 h-16 mr-4 rounded-lg"
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
export default function Home() {
  return (
    <View className="flex-1 gap-6">
      <FieldTypeCard
        image={require('../../../../assets/images/area-foto-1.jpg')}
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
