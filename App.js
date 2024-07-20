import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, Button } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#dea32c' }}}>
        <Stack.Screen 
        name="MealsCategories" 
        component={CategoryScreen}
        options={{
          title: 'Meals Categories'
        }}
        />
        <Stack.Screen 
        name="MealsOverview" 
        component={MealsOverviewScreen}
        />
        <Stack.Screen 
        name="MealDetails" 
        component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
