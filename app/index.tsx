import { View, Text } from 'react-native';
import { api } from '@/convex/_generated/api';
import { useQuery, useMutation } from 'convex/react';
import { useEffect } from 'react';
const HomeScreen = () => {
  const users = useQuery(api.users.get);
  const createUserMutation = useMutation(api.users.createUser);
  {
    console.log(users);
  }

  async function registerUser() {
    try {
      const userId = createUserMutation({
        name: 'San Martinez',
        email: 'san@example.com',
        passwordHash: 'hashedpassword123',
        phone: '+5491123456789',
        role: 'owner',
        avatarUrl: 'https://example.com/avatar.jpg',
      });

      console.log('User created with ID:', userId);
    } catch (error) {
      // console.error('Error creating user:', error.message);
    }
  }

  useEffect(() => {
    registerUser();
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">HOME</Text>
      {users?.map(({ _id, name }) => <Text key={_id}>{name}</Text>)}
    </View>
  );
};
export default HomeScreen;
