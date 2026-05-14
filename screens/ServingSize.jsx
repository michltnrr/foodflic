import {Text, View, Pressable, Modal, Image, ScrollView, StyleSheet} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { BlurView } from "expo-blur"
import GradientButton, {GradientButtonText} from "../components/GradientButton"
import { useState } from "react"
import Feather from '@expo/vector-icons/Feather';
import {useFonts,BeVietnamPro_700Bold, BeVietnamPro_700Bold_Italic} from '@expo-google-fonts/be-vietnam-pro';
import {PlusJakartaSans_600SemiBold} from '@expo-google-fonts/plus-jakarta-sans'

export default function ServingSize({showModal, setShowModal}) {
    //I NEED TO ADD A RETAKE PHOTO BUTTON SOMEHWERE
    const insets = useSafeAreaInsets()
    const [servings, setServing] = useState(1)
    
    function handleServingsAdd(prev) {
        setServing(prev => prev+1)
    }

    function handleServingsMinus(prev) {
        setServing(prev => prev > 1 ? prev -1: 1)
    }

    const servingText = servings > 1 ? 'SERVINGS' : 'SERVING'

    return (
        <Modal
            animationType="slide"
            visible={showModal}
            presentationStyle="fullScreen"
        >
            <View style={[styles.mainContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
                <View style={styles.header}>
                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}
                    onPress={() => setShowModal(false)}
                    >
                        <Feather name="x" size={30} color="#893500" />
                    </Pressable>
                    <Text style={styles.confirmText}>Confirm Your Serving</Text>
                    <View style={{width: 30}}/>
                </View>


                <ScrollView>
                <View style={styles.foodPicContainer}>
                        <Image 
                        source={require('../images/IMG_2047.png')}
                        style={styles.foodPic}
                        />

                        <View style={styles.captureStatusWrapper}>
                        <BlurView  intensity={35} tint="light" style={styles.captureStatus}>
                            <View style={{marginTop: 5}}>
                                <Feather name="camera" size={24} color="#893500" />
                            </View>
                            <View>
                                <Text style={{fontFamily: 'PlusJakartaSans_600SemiBold', color:'#767676', fontSize: 13}}>CAPTURE SUCCESSFUL</Text>
                                <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 12}}>General Tso's Chicken</Text>
                            </View>
                        </BlurView>

                        </View>
                </View>

                <View style={styles.quantityContainer}>
                        <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 15, marginBottom: 10, paddingTop: 12}}>Serving Size</Text>
                        <Text style={{fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 12, color: '#9b9a9a', textAlign: 'center'}}>Adjust the quantity to determine the perfect portion based video length to pair with your meal</Text>
                        <View style={styles.quantityBtnsContainer}>
                            <Pressable style={({pressed}) => (
                                [styles.quantityBtns, {
                                    opacity: pressed ? 0.5 : 1
                                }]
                            )}
                            onPress={() => handleServingsMinus(servings)}>
                                <Feather name="minus" size={24} color="#893500" />
                            </Pressable>
                            <Text style={{color: '#893500', fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 45}}>{servings}</Text>
                            <Pressable style={({pressed}) => (
                                [styles.quantityBtns, {
                                    opacity: pressed ? 0.5: 1
                                }]
                            )}
                            onPress={() => handleServingsAdd(servings)}>
                                <Feather name="plus" size={24} color="#893500" />
                            </Pressable>
                        </View>
                        <View style={styles.servingsTextContainer}>
                            <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 12, color: '#767676'}}>{servingText}</Text>
                        </View>
                </View>

                <View style={styles.videosBtn}>
                    <GradientButton>
                        <GradientButtonText>
                            Find Matching Videos
                        </GradientButtonText>
                        <Feather name="arrow-right" size={24} color="white" />
                    </GradientButton>
                </View>
            </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f4f2f2'
    },
    modalRoot: {
        flex: 1,
        backgroundColor: '#f4f2f2'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 15
    },

    confirmText: {
        fontFamily: 'BeVietnamPro_700Bold',
        fontSize: 16,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    foodPicContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        position: 'relative'
    },

    foodPic: {
        width: 325,
        height: 325,
        borderRadius: 25
    },

    captureStatusWrapper: {
        position: 'absolute',
        bottom: 12,
        alignSelf: 'center',
        borderRadius: 25,
        overflow: 'hidden'
    
    },

    captureStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },

    quantityContainer: {
        marginTop: 25,
        borderRadius: 25,
        backgroundColor: '#e4e4e4',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },

    quantityBtnsContainer: {
        flexDirection: 'row',
        gap: 50,
        marginTop: 15
    },

    servingsTextContainer: {
        paddingBottom: 15
    },

    quantityBtns: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    videosBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})