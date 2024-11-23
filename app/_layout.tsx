import { Slot, SplashScreen } from 'expo-router';
import { View } from 'react-native';
import "./global.css"
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    // 'Inter': require('./assets/fonts/Inter-Regular.ttf'),
    "work-bold": require("../assets/fonts/WorkSans-Bold.ttf"),
    "work-light": require("../assets/fonts/WorkSans-Light.ttf"),
    "work-medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>

  )
}


export default RootLayout