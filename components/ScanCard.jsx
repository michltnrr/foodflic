import {Image, Text, View, Pressable, StyleSheet} from "react-native"
import {useFonts,BeVietnamPro_700Bold, BeVietnamPro_700Bold_Italic} from '@expo-google-fonts/be-vietnam-pro';
import {PlusJakartaSans_600SemiBold} from '@expo-google-fonts/plus-jakarta-sans'

export default function ScanCard({dishName, timeStamp, imgURL}) {
    return (
        <Pressable style={({pressed}) => [styles.cardBtnContainer, {opacity: pressed ? 0.5 : 1}]}>
            <View style={styles.cardContainer}>
                <Image 
                style={styles.foodPhoto}
                source={imgURL}></Image>
                <Text style={styles.dishName}>{dishName}</Text>
                <Text style={styles.timeStamp}>{timeStamp}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    cardBtnContainer: {
        width: 150,
        marginHorizontal: 5
    },

    cardContainer: {
        width: 150,
        margin: 10,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingTop: 20,
        paddingHorizontal: 10
    },

    foodPhoto: {
        height: 135,
        width: '100%',
        marginBottom: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },

    dishName: {
        fontFamily: 'BeVietnamPro_700Bold'
    },

    timeStamp: {
        fontFamily: 'PlusJakartaSans_600SemiBold',
        color: '#767676',
        fontSize: 12
    }
    
})