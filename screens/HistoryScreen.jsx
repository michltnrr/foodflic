import {Text, View, ScrollView, FlatList, StyleSheet} from "react-native"
import Header from "../components/Header"
import { mealHistory } from "../mealHistory";
import HistoryCard from "../components/HistoryCard";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HistoryScreen() {
    return (
      <View style={styles.mainContainer}>
        <Header/>

            <View style={{margin: 14}}>
                <Text style={{fontFamily: 'BeVietnamPro_700Bold', fontSize: 35}}>History</Text>
                <Text style={{fontFamily: 'PlusJakartaSans_600SemiBold', color: '#767676', fontSize: 15}}>Relive your meals as visual memories.</Text>
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