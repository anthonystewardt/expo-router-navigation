import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions, TabActions } from '@react-navigation/native'
import { router, Stack, useNavigation } from 'expo-router'
import { View, Text } from 'react-native'
const StackRoot = () => {

  const navigation = useNavigation()


  const onHeaderLeftPress = (canGoBack: boolean) => {

    console.log('canGoBack', canGoBack)
    if (canGoBack) {
      // navigation.dispatch(StackActions.pop())
      router.back()
      return
    }

    navigation.dispatch(DrawerActions.toggleDrawer())
  }


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
        headerLeft: ({ tintColor, canGoBack }) => {
          return (
            <Ionicons
              name={canGoBack ? "arrow-back-outline" : "menu"}
              className='mr-5' size={24} color={tintColor}
              onPress={() => onHeaderLeftPress(canGoBack as boolean)}
            // style={{ marginLeft: 10 }}
            />
          )
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