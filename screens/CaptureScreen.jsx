import {View, Pressable, Button, Text, Image, ScrollView, FlatList, Alert, StyleSheet} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { LinearGradient } from 'expo-linear-gradient';

import ScanCard from '../components/ScanCard';
import Header from '../components/Header';
import GradientButton, {GradientButtonText } from '../components/GradientButton';
import { meals } from '../meals';
import ServingSize from './ServingSize';
import HistoryScreen from './HistoryScreen';
import { useState, useRef } from 'react';

import * as ImagePicker from 'expo-image-picker'
import { CameraView, CameraType, CameraMode, useCameraPermissions } from 'expo-camera';
import { PlusJakartaSans_600SemiBold } from '@expo-google-fonts/plus-jakarta-sans';

export default function CaptureScreen() {
    const [imageSelected, setImageSelected] = useState(false)
    const [image, setImage] = useState(null)

    const [permission, requestPermisson] = useCameraPermissions()
    const ref = useRef(null)
    const [photoUri, setPhotoUri] = useState(null)
    const [camMode, setCamMode] = useState("picture")
    const [facing, setFacing] = useState('back')
    const [displayCam, setDisplayCam] = useState(false)

    const [showHistory, setShowHistory] = useState(false)

    async function pickImage() {
        const permissonResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if(!permissonResult.granted) {
            Alert.alert('Permission required.', 'Permisson to access the media library is required.')
            return
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 5],
            quality:1
        })
    
        console.log(result)
    
        if(!result.canceled) {
            setImage(result.assets[0].uri)
            setImageSelected(true)
        }
    }

    //camera permissions
    if(!permission) {
        return null
    }

    if(!permission.granted) {
        return (
            <View>
                <Text>Permission is required to enable camera use</Text>
                <Button onPress={requestPermisson} title='Grant Permisson'></Button>
            </View>
        )
    }

    async function takePhoto() {
        const photo = await ref.current?.takePictureAsync()
        if(photo?.uri) {
            setPhotoUri(photo.uri)
            setImage(photo.uri)
            setImageSelected(true)
            setDisplayCam(false)
        }

        console.log('Photo taken')
    }

    if(displayCam) {
        return (
            <View style={styles.cameraScreen}>
                
            <CameraView
                ref={ref}
                style={StyleSheet.absoluteFillObject}
                facing={facing}
                mode={camMode}
                />

                <Pressable 
                onPress={() => setDisplayCam(false)}
                style={({pressed}) => [
                    styles.closeBtn,
                    {opacity: pressed ? 0.5: 1}]}
                >
                    <Text style={{fontFamily: 'PlusJakartaSans_600SemiBold', color: 'black', fontSize: 13}}>Close</Text>
                </Pressable>

            <View style={styles.pictureBtnContainer}>
            <Pressable onPress={takePhoto}
            style={({pressed}) => [styles.pictureBtn, {
                opacity: pressed? 0.5 :1
            }]}/>
            </View>      
        </View>
        )
    }
    
    function handleHistory() {
        setShowHistory(true)
    }
    
    if(showHistory) {
        return <HistoryScreen setShowHistory={setShowHistory}/>
    }

    return (
     <View style={styles.mainContainer}>
        <Header/>

        <ScrollView>
        <View style={styles.questionContainer}>
            <Text style={styles.question}>What's on your <Text style={[styles.question, {color: '#893500', fontFamily: 'BeVietnamPro_700Bold_Italic'}]}>plate</Text><Text style={styles.question}>?</Text> </Text>

            <Text style={styles.instructions}>Snap a pic of any dish to get videos curated to match the vibe and size of your grub!</Text>
        </View>

        <View style={styles.imageButtons}>
            <Pressable style={({pressed}) => [
                styles.uploadButton, 
                pressed && styles.uploadButtonPressed]}
                onPress={pickImage}
                >
                <MaterialIcons name="upload-file" size={40} color="#893500" />
                <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 20}}>
                    Upload from gallery
                </Text>
            </Pressable>
            {imageSelected && <ServingSize showModal={imageSelected} setShowModal={setImageSelected} imgSource={image}/>}

            <GradientButton onPress={() => setDisplayCam(true)}>
                <Octicons name="sparkles-fill" size={40} color="white" />

                <GradientButtonText>
                    ANALYZE DISH
                </GradientButtonText>
            </GradientButton>

        </View>

        <View style={styles.historyContainer}>
            <Text style={styles.recentsText}>Recent Scans</Text>
            <Text style={styles.mealsText}>Your meal history</Text>
        </View>

        <View style={styles.allmealsContainer}>
            <Pressable style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1
            })}
            onPress={handleHistory}>
                <Text style={{alignSelf: 'flex-end', color: '#893500', fontFamily: 'BeVietnamPro_700Bold'}}>VIEW ALL</Text> 
            </Pressable>
        </View>
        <FlatList
        data={meals}
        renderItem={({item}) => <ScanCard dishName={item.dishName} timeStamp={item.timeStamp} imgURL={item.imgURL}/>}
        keyExtractor={item => item.id}
        numColumns={1}
        horizontal={true}/>
        </ScrollView>
     </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
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
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 14,
        marginBottom: 50,
        padding: 10
    },
    
    uploadButtonPressed: {
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
        padding: 10,
        opacity: 0.5
    },

    historyContainer: {
        marginTop: 40,
        marginLeft: 20
    },

    recentsText: {
        fontFamily: 'BeVietnamPro_700Bold',
        fontSize: 24
    },
    
    mealsText: {
        fontFamily: 'PlusJakartaSans_600SemiBold',
        fontSize: 14,
        color: '#767676',
    },
    
    allmealsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8,
        marginRight: 12
    },

    cameraScreen: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        zIndex: 999,
        elevation: 999
    },

    closeBtn: {
        position: 'absolute',
        top: 60,
        left: 20,
        backgroundColor: 'rgba(237, 237, 237, 0.9)',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 12,
    },

    pictureBtn: {
        height: 85,
        width: 85,
        borderRadius: 999,
        backgroundColor: 'white',
        borderColor: '#ff7a31',
        borderWidth: 4
    },

    pictureBtnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        width: '100%'

    }
})