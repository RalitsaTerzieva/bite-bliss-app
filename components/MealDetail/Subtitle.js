import { View, Text, StyleSheet } from 'react-native';

function Subtitle({children}) {
    return <View style={styles.subTextContainer}>
    <Text style={styles.subTitle}>{children}</Text>
</View>
}

export default Subtitle;

const styles = StyleSheet.create({
subTitle: {
    color: '#b33420',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
},
subTextContainer: {
    borderBottomColor: '#b33420',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4
}
});