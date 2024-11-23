import CustomButton from '@/components/CustomButton'
import { Link, Redirect, router } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const App = () => {
  return <Redirect href="/(drawer)/(tabs)/home" />
  {/* <SafeAreaView className='px-5 mt-3'>
      <Link href="/products" className='text-4xl font-semibold dark:text-secondary-200 font-work-light'>Productos</Link>
      <Link href="/profile" className='text-4xl font-semibold dark:text-secondary-200 font-work-light'>Profile</Link>
      <Link href="/settings" className='text-4xl font-semibold dark:text-secondary-200 font-work-light'>Settings</Link>
      <View className='flex-col gap-2'>
        <CustomButton color={"secondary"}
          onPress={() => router.push('/products')}
        >Productos</CustomButton>

        <Link href="/edit" className='block w-full mt-3' asChild>
          <CustomButton color={"primary"}>Edit</CustomButton>
        </Link>
      </View> 


    </SafeAreaView>*/}

}
export default App