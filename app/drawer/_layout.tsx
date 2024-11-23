

import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{

        drawerActiveTintColor: 'indigo',
        drawerInactiveTintColor: 'gray',
        headerShown: true,
        // headerTitle: 'Drawer Layout',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerShadowVisible: false,

      }}
    >
      <Drawer.Screen
        name="billing/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <Ionicons size={size} name="home-outline" color={color} />,
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'Usuario',
          drawerIcon: ({ color, size }) => <Ionicons size={size} name="person-add" color={color} />,
        }}
      />
    </Drawer>
  )
}
export default DrawerLayout