import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favourite-context';
import { MEALS } from '../data/dummy-data';

function FavouriteScreen() {
    const favoriteContext = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteContext.ids.includes(meal.id) );

    if(favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet!</Text>
        </View>
    }

    return <MealsList items={favoriteMeals}/>
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});