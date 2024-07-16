import { StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
        options={{
          title: 'Meals Overview'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
