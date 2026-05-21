import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CaptureScreen from "../screens/CaptureScreen";
import HistoryScreen from "../screens/HistoryScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()

export default function BottomTabs() {
    return (
        <Tab.Navigator
        detachInactiveScreens={false} 
        screenOptions={
            {headerShown: false,
            lazy: false,
             animation: 'shift',
             tabBarStyle: {
                bottom: 10,
                left: 15 ,
                right: 15,

                height: 60,
                paddingBottom: 5,
                paddingTop: 5,

                borderRadius: 20,
                backgroundColor: '#f4f2f2'
             }

            }
            }>
            <Tab.Screen name="Capture" component={CaptureScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Entypo name="camera" size={24} color={focused ? '#893500' : 'gray'} />
                ),
                tabBarLabelStyle: {fontSize: 14},
                tabBarActiveTintColor: '#893500',
                tabBarInactiveTintColor: 'gray'
            }
        }
        />
            
            
            <Tab.Screen name="History" component={HistoryScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <Octicons name="history" size={22} color={focused ? '#893500' : 'gray'} />
                ),
                tabBarLabelStyle: {fontSize: 14},
                tabBarActiveTintColor: '#893500',
                tabBarInactiveTintColor: 'gray'
            }
        }/>
            
            
            <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => (
                    <MaterialIcons name="settings" size={24} color={focused ? '#893500' : 'gray'} />
                ),
                tabBarLabelStyle: {fontSize: 14},
                tabBarActiveTintColor: '#893500',
                tabBarInactiveTintColor: 'gray'
            }
        }/>
        </Tab.Navigator>
    )
}