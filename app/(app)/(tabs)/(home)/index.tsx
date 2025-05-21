import { Text, View, Image, Pressable } from 'react-native';

import { useRouter } from 'expo-router';

const imgField = require('../../../../assets/images/area-foto-1.jpg');
const FieldTypeCard = ({ className, type, description, image, price }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/fieldDetails/1`)}
      className="bg-white rounded-2xl p-4 m-4 shadow-sm flex-row items-center"
    >
      <Image
        source={image}
        className="w-32 h-32 mr-4 rounded-lg"
        resizeMode="cover"
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
        image={imgField}
        price="25000"
        type="Futbol 6"
        description="Cocina profesional"
      />
    </View>
  );
}
