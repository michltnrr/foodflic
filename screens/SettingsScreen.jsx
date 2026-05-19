import {View, Text, ScrollView, Pressable, StyleSheet} from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from "../components/Header"
import GradientButton, {GradientButtonText} from "../components/GradientButton";
import { useState } from "react";

export default function SettingsScreen() {
    const [selected, setSelected] = useState("instant")

    return (
        <View>
            <Header/>
                <View style={styles.mainHeading}>
                    <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 30}}>WorkFlow Settings</Text>
                    <Text style={{fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 14, color: '#767676'}}>Customize your culinary capture experience. Define how the AI suggests videos to enjoy alongside your meals.</Text>
                </View>
            <ScrollView>

                    <Pressable
                    onPress={() => setSelected("instant")}
                    style={({ pressed }) => [
                    styles.cardsContainer,
                    selected === "instant" && styles.cardSelected,
                    pressed && styles.cardPressed,]}
                    >
                        <View style={styles.cardsContainer}>
                            <View style={styles.cardHeader}>
                                <View style={[styles.iconWrapper, {backgroundColor: '#9c3e00' + '28'}]}>
                                    <MaterialCommunityIcons name="play-box" size={28} color="#9c3e00" />
                                </View>
                                
                                    <Text style={styles.cardTitle}>Instant Play</Text>
                            </View>
                                <Text style={styles.cardSubText}>A curated choice. Get one high-quality video recommendation that immediately auto-opens on youtube</Text>
                        </View>
                    </Pressable>



                    <Pressable
                    onPress={() => setSelected("watchlist")}
                    style={({ pressed }) => [
                    styles.cardsContainer,
                    selected === "watchlist" && styles.cardSelected,
                    pressed && styles.cardPressed,
                    ]}>
                        <View style={styles.cardsContainer}>
                            <View style={styles.cardHeader}>
                                <View style={[styles.iconWrapper, {backgroundColor: '#386631' + '28'}]}>
                                    <MaterialCommunityIcons name="play-box-multiple" size={28} color="#386631" />
                                </View>
                                <Text style={styles.cardTitle}>Watch List</Text>
                            </View>
                                <Text style={styles.cardSubText}>Get your choice of one of five highest recommended videos to pair with your meal.</Text>
                        </View>
                    </Pressable>


                <View style={styles.saveBtns}>
                    <Pressable style={({pressed}) => [styles.discardBtn, {opacity: pressed ? 0.5 : 1}]}>
                        <Text style={{fontFamily: 'BeVietnamPro_700Bold', color: '#9c3e00', fontSize: 17, textAlign: 'center', lineHeight: 20}}>
                        Discard{"\n"}Changes
                        </Text>
                    </Pressable>

                    <GradientButton width={150} style={{flex: 1}}>
                        <GradientButtonText>Save {"\n"}Workflow</GradientButtonText>
                    </GradientButton>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f4f2f2'
    },

    mainHeading: {
        padding: 12
    },

    cardsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 12,
        borderRadius: 20,

        borderWidth: 2,
        borderColor: "transparent",

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },

    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        gap: 12
    },

    cardTitle: {
        fontFamily: 'BeVietnamPro_700Bold',
        fontSize: 20,
        lineHeight: 24,         // keeps text vertically stable
        flexShrink: 1
    },

    cardSubText: {
        fontFamily: 'BeVietnamPro_400Regular', 
        fontSize: 13, 
        textAlign: 'center',
        color: '#767676',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 13,
        lineHeight: 18
    },

    cardPressed: {
        transform: [{ scale: 0.98 }],
        shadowOpacity: 0.1,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },

    cardSelected: {
        borderColor: "#9c3e00",
        shadowOpacity: 0.15,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
        elevation: 10,
    },

    iconWrapper: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },

    saveBtns: {
        margin: 12,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        gap: 12,
        paddingHorizontal: 12
    },

    discardBtn: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: 16
    }
})