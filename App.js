import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, Button, View, Platform } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavouriteScreen';
import { Provider } from 'react-redux'
import { store } from './store/redux/store';
import * as Notifications from 'expo-notifications';
//import FavoritesContextProvider from './store/context/favourite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//runs when the app starts
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});

function DrawerNavigator() {
  return (
    <>
    <Drawer.Navigator screenOptions={{headerStyle: { backgroundColor: '#dea32c' }}}>
      <Drawer.Screen name='Categories' component={CategoryScreen} options={{
        title: 'All Categories'
      }}/>
      <Drawer.Screen name='Favourites' component={FavoriteScreen}/>
    </Drawer.Navigator>
   </>
  )
}

export default function App() {
  async function scheduleNotificationHandler(){
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission not granted!');
      return;
    }
    
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notifications',
        body: 'This is the body of the notifications',
        data: { userName: 'Clara' }
      },
      trigger: {
        seconds: 5
      }
    })
  }
  return (
    <>
    <StatusBar style='light' />
    <Provider store={store}>
    <NavigationContainer>
      <View style={styles.container}>
          <View style={styles.notificationButton}>
            <Button title='Notifications' onPress={scheduleNotificationHandler} />
          </View>
      </View>
      <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#dea32c' }}}>
        <Stack.Screen 
        name="DrawerScreen" 
        component={DrawerNavigator}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name="MealsOverview" 
        component={MealsOverviewScreen}
        />
        <Stack.Screen 
        name="MealDetails" 
        component={MealDetailScreen}
        options={{
          title: 'About the Meal'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  notificationButton: {
    width: '80%',
    margin: 20,
    backgroundColor: '#FFB6C1',
    borderRadius: 5,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },
});
