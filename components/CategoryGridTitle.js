import {View, Pressable, Text, StyleSheet } from 'react-native';

function CategoryGridTile({title, color}) {
    return <View style={styles.gridItem}>
        <Pressable>
            <View>
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
      elevation: 4
    },
  });