import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { View, Text } from 'react-native'

const HomeScreen = () => {
  return (
    <View className='px-4 mt-10'>
      <View className='flex-col gap-2'>
        <CustomButton color={"secondary"}
          onPress={() => router.push("/drawer/tabs/products")}
        >Productos</CustomButton>

        <Link href="/drawer/tabs/profile" className='block w-full mt-3' asChild>
          <CustomButton color={"primary"}>Edit</CustomButton>
        </Link>

        <CustomButton color={"tertiary"}
          onPress={() => router.push("/drawer/tabs/products")}
        >Productos</CustomButton>
      </View>
    </View>
  )
}
export default HomeScreen