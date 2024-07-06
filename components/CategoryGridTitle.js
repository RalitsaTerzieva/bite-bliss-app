import {View, Pressable, Text, StyleSheet } from 'react-native';

function CategoryGridTile({title, color}) {
    return <View style={styles.gridItem}>
        <Pressable style={styles.button}>
            <View style={styles.innerContainer}>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      backgroundColor: 'white',
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 8
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });