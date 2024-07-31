import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, Button } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import FavoritesContextProvider from './store/context/favourite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
  <Drawer.Navigator screenOptions={{headerStyle: { backgroundColor: '#dea32c' }}}>
    <Drawer.Screen name='Categories' component={CategoryScreen} options={{
      title: 'All Categories'
    }}/>
    <Drawer.Screen name='Favourites' component={FavouriteScreen}/>
  </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <FavoritesContextProvider>
    <NavigationContainer>
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
    </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
