import { Alert, View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { useState } from 'react';
import { useSession } from '@/context/AuthContext';

export default function IndexScreen() {
  const { signOut } = useSession();
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const [modalVisible, setModalVisible] = useState(false);

  // https://reactnative.dev/docs/alert
  const handleOpenAlert = () => {
    Alert.alert('Warning!', 'Are you sure you want to proceed?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Confirm',
        style: 'destructive',
        onPress: () => {
          console.log("Let's go!");
        },
      },
    ]);
  };

  return (
    <View className="justify-center flex-1 p-4">
      <Text>TEST</Text>
    </View>
  );
}
