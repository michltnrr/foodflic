import {View, Pressable, Text, Image, ScrollView, StyleSheet} from 'react-native'
import {useFonts,BeVietnamPro_700Bold, BeVietnamPro_700Bold_Italic} from '@expo-google-fonts/be-vietnam-pro';
import {PlusJakartaSans_600SemiBold} from '@expo-google-fonts/plus-jakarta-sans'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function CaptureScreen() {

    const [fontsisLoaded] = useFonts({
        BeVietnamPro_700Bold,
        BeVietnamPro_700Bold_Italic,
        PlusJakartaSans_600SemiBold
    })

    if(!fontsisLoaded) {
        return null
    }

    return (
     <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
            <Image style={styles.logo} source={require('../images/screen.png')}></Image>
            <Text style={styles.title}>Foodflic</Text>
        </View>

        <ScrollView>
        <View style={styles.questionContainer}>
            <Text style={styles.question}>What's on your <Text style={[styles.question, {color: '#893500', fontFamily: 'BeVietnamPro_700Bold_Italic'}]}>plate</Text><Text style={styles.question}>?</Text> </Text>

            <Text style={styles.instructions}>Snap a pic of any dish to get videos curated to match the vibe and size of your grub!</Text>
        </View>

        <View style={styles.imageButtons}>
            <Pressable style={styles.uploadButton}>
                <MaterialIcons name="upload-file" size={40} color="#893500" />
                <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 20}}>
                    Upload from gallery
                </Text>
            </Pressable>

            <LinearGradient colors={['#9c3e00', '#ff7a31']} style={styles.takePhotoButton}>
            <Pressable style={styles.buttonContent}>
                <Octicons name="sparkles-fill" size={40} color="white" />
                <Text style={{fontFamily: 'BeVietnamPro_700Bold', color: 'white', fontSize: 20}}>
                    ANALYZE DISH
                </Text>
            </Pressable>

            </LinearGradient>
        </View>
        </ScrollView>
     </View>

    )
}

/*gonna make orange gradeint buttons its own components, add button styling for when pressed */



const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
    },
    
    headerContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
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

    questionContainer: {
        marginTop: 20,
        marginLeft: 20
    },
    question: {
        fontSize: 30,
        fontFamily: 'BeVietnamPro_700Bold'
    },

    instructions: {
        color: '#767676',
        padding: 15,
        fontSize: 15,
        fontFamily: 'PlusJakartaSans_600SemiBold'
    },

    imageButtons: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    uploadButton: {
        borderStyle: 'dashed',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#a1a1a1',
        width: 305,
        backgroundColor: '#f0f1ef',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 14,
        marginBottom: 50,
        padding: 10
    },

    takePhotoButton: {
        borderRadius: 20,
        width: 305,
    }, 

    buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //gap prop adds equal spacing between items in a flex container (better than margins)
    gap: 10,
    paddingVertical: 14,
},
})