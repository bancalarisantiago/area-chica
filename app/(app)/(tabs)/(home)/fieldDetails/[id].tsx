import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
const FieldDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Field Details {JSON.stringify(id)}</Text>
    </View>
  );
};

export default FieldDetails;
