import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const StackRoot = () => {
  return (
    <Stack
      screenOptions={{
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
        }
      }
      }
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Inicio',
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Productos'
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Perfil'
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Ajustes'
        }}
      />

    </Stack >
  )
}
export default StackRoot