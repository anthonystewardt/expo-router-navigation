import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Text, Platform } from 'react-native'

const CustomDrawer = (props: DrawerContentComponentProps) => {

  const isAndroid = Platform.OS === 'android'


  return (
    <DrawerContentScrollView  {...props} scrollEnabled={false} >
      <View className={`${isAndroid ? "mt-8" : "mt-8"} p-7`}>
        <View className=' h-[150px] rounded-lg bg-indigo-800 flex justify-center items-center'>
          <View className='flex items-center justify-center p-10 bg-white rounded-full'>
            <Text className='text-2xl font-work-bold'>AS</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
export default CustomDrawer