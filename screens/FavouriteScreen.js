import { StyleSheet, View, Text } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
//import { FavoritesContext } from '../store/context/favourite-context';
import { MEALS } from '../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';

function FavoriteScreen() {
    //const favoriteContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids || []);

    const dispatch = useDispatch();
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id) );

    if(favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet!</Text>
        </View>
    }

    return <MealsList items={favoriteMeals}/>
}

export default FavoriteScreen;

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