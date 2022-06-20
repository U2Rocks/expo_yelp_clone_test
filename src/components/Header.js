import {View, Text, StyleSheet} from 'react-native';


// this component is the main header for the news app
export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Great News</Text>
            <Text style={styles.boldHeader}>Delivered Weekly!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 25,
    },

    lightHeader: {
        fontSize: 35
    },

    boldHeader: {
        fontSize: 40,
        fontWeight: "bold"
    },
})