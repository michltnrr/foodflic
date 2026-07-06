import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CaptureScreen from './screens/CaptureScreen';
import SettingsScreen from './screens/SettingsScreen';
import {useFonts,BeVietnamPro_700Bold, BeVietnamPro_700Bold_Italic, BeVietnamPro_400Regular} from '@expo-google-fonts/be-vietnam-pro';
import {PlusJakartaSans_600SemiBold} from '@expo-google-fonts/plus-jakarta-sans'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs';

import { supabase } from './utils/supabase';
import { useEffect } from 'react';

export default function App() {
  const [fontsisLoaded] = useFonts({
        BeVietnamPro_700Bold,
        BeVietnamPro_700Bold_Italic,
        BeVietnamPro_400Regular,
        PlusJakartaSans_600SemiBold
    })
    
    useEffect(() => {
      const getUsers = async () => {
        const {data, error} = await supabase
        .from('users')
        .select() 
  
        if(error) {
            console.error(error)
            return
        }
        console.log(data)

      }
      getUsers()
    }, [])
    if(!fontsisLoaded) {
        return null
    }
  
    
    return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <StatusBar style="black" />
          <BottomTabs/>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f2f2',
  },
});