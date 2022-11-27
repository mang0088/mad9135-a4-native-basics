import * as React from 'react';
import { AppWrapper } from './context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserStackNavigation } from './navigation/UserNavigation';
import { SafeAreaView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';

const homeName = 'Home';
const detailsName = 'Details';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppWrapper>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let routeName = route.name;

                if (routeName === homeName) {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (routeName === detailsName) {
                  iconName = focused ? 'list' : 'list-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'blue',
              inactiveTintColor: 'grey',
              labelStyle: { paddingBottom: 8, fontSize: 10 },
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen
              name="Details"
              component={UserStackNavigation}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
});
