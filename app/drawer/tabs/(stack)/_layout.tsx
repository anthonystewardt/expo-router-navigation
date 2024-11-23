import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const StackRoot = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
      }
    >
      <Stack.Screen
        name="drawer/tabs/(stack)/home"
        options={{
          title: 'Inicio',
          animation: 'slide_from_right'
        }}

      />
      <Stack.Screen
        name="drawer/tabs/(stack)/products"
        options={{
          title: 'Productos'
        }}
      />
      <Stack.Screen
        name="drawer/tabs/(stack)/profile"
        options={{
          title: 'Perfil'
        }}
      />

      <Stack.Screen
        name="drawer/tabs/(stack)/settings"
        options={{
          title: 'Ajustes'
        }}
      />

    </Stack >
  )
}
export default StackRoot