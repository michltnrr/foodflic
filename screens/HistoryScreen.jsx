import {Text, View, ScrollView, FlatList, StyleSheet, Pressable} from "react-native"
import Header from "../components/Header"
import {useFonts,BeVietnamPro_700Bold, BeVietnamPro_700Bold_Italic} from '@expo-google-fonts/be-vietnam-pro';
import {PlusJakartaSans_600SemiBold} from '@expo-google-fonts/plus-jakarta-sans'
import { mealHistory } from "../components/mealHistory";
import HistoryCard from "../components/HistoryCard";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function HistoryScreen({setShowHistory}) {
    return (
      <View style={styles.mainContainer}>
        <Header/>

            <View style={{margin: 12}}>
                <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 35}}>History</Text>
                <Text style={{fontFamily: 'PlusJakartaSans_600SemiBold', color: '#767676', fontSize: 15}}>Relive your meals as visual memories.</Text>
                <Pressable style={({pressed}) => [
                    {
                        flexDirection: 'row',
                        opacity: pressed ? 0.5 : 1,
                        backgroundColor: '#ca5106',
                        width: 80,
                        borderRadius: 25,
                        marginTop: 18
                    }
                ]}
                onPress={() => setShowHistory(false)}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={{color: 'white', fontSize: 18}}>Back</Text>
                </Pressable>
            </View>


            <FlatList
            data={mealHistory}
            renderItem={({item}) => <HistoryCard 
            title={item.title} 
            channel={item.channel} 
            views={item.views} 
            duration={item.duration}
            foodPic={item.foodPic}
            thumbnail={item.thumbnail}/>}
            keyExtractor={(item)=> item.id.toString()}
            />

      </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})