import DetailsScreen from '../screens/DetailsScreen';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const UserStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export { UserStackNavigation };
