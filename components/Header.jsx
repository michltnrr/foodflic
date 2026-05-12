import {View, Image, Text, StyleSheet} from "react-native"

export default function Header() {
    return (
          <View style={styles.headerContainer}>
            <Image style={styles.logo} source={require('../images/screen-removebg-preview.png')}></Image>
            <Text style={styles.title}>Foodflic</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
    flexDirection: 'row',
    marginLeft: 20
    },

    logo: {
        width: 60,
        height: 60,
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
        color: '#893500'
    },
})