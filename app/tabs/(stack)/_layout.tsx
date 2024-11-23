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
        name="tabs/(stack)/home/index"
        options={{
          title: 'Inicio',
          animation: 'slide_from_right'
        }}

      />
      <Stack.Screen
        name="tabs/products"
        options={{
          title: 'Productos'
        }}
      />
      <Stack.Screen
        name="tabs/profile"
        options={{
          title: 'Perfil'
        }}
      />

      <Stack.Screen
        name="tabs/settings"
        options={{
          title: 'Ajustes'
        }}
      />

    </Stack >
  )
}
export default StackRoot