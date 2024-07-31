import { useLayoutEffect, useContext } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favourite-context';

function MealDetailScreen({ route, navigation }) {
    const favoriteMealCtx = useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId );

    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        if(mealIsFavorite) {
            favoriteMealCtx.removeFavorite(mealId);
        } else {
            favoriteMealCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
       navigation.setOptions({
        headerRight: () => {
            return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color='white' onPress={changeFavoriteStatusHandler}/>
        }
       });
    }, [navigation, changeFavoriteStatusHandler]);

    return <ScrollView style={styles.rootContainer}>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}/>
            </View>
        </View>
    </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    detailText: {
        color: '#de732c'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
});