import {View, Text, Image, StyleSheet} from "react-native"
import GradientButton, {GradientButtonText} from "./GradientButton";
import {useFonts,BeVietnamPro_700Bold, BeVietnamPro_700Bold_Italic} from '@expo-google-fonts/be-vietnam-pro';
import {PlusJakartaSans_600SemiBold} from '@expo-google-fonts/plus-jakarta-sans'
import Entypo from '@expo/vector-icons/Entypo';

export default function HistoryCard({title, channel, views, duration, foodPic, thumbnail}) {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.dataContainer}>
                <View>
                    <Text style={{fontFamily: 'BeVietnamPro_700Bold', color: '#893500', fontSize: 13}}>OCT 24</Text>
                    <Text style={{fontFamily: 'PlusJakartaSans_600SemiBold', color: '#767676', fontSize: 12, marginTop: 10}}>1:47 PM</Text>
                </View>

                <View style={styles.photosContainer}>
                        <Image style={styles.photo} source={foodPic}/>
                        <Image style={styles.photo} source={thumbnail}/>
                </View>

                <View style={styles.vidDataContainer}>
                    <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 20}}
                    numberOfLines={2}
                    ellipsizeMode="tail">{title}</Text>
                    <Text style={{fontFamily: 'PlusJakartaSans_600SemiBold', color: '#767676', fontSize: 14}}>By {channel} • {duration} • {views}</Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <GradientButton>
                        <Entypo name="controller-play" size={24} color="white" />

                        <GradientButtonText>
                            Watch Again
                        </GradientButtonText>
                    </GradientButton>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    dataContainer: {
        margin: 12,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        borderRadius: 25,
        padding: 13
    },

    photosContainer: {
        flexDirection: 'row',
        gap: 7,
        backgroundColor: '#eae7e7',
        // margin: 12,
        padding: 15,
        borderRadius: 25,
        marginVertical: 8
    },

    photo: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 25,
    },

    vidDataContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})