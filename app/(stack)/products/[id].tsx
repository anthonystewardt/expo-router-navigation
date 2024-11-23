import { products } from '@/store/products.store'
import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
const ProductById = () => {
  const { id } = useLocalSearchParams()

  const product = products.find((product) => product.id === id)

  if (!product) {
    return (
      <View>
        <Text>Product not found</Text>
      </View>
    )
  }

  return (
    <View className='px-4'>
      <Text
        className='mt-4 text-4xl font-bold dark:text-primary-200 font-work-bold'
      >{product.title}</Text>
      <Text className='mt-2 text-lg dark:text-primary-200'>{product.description}</Text>
    </View>
  )
}
export default ProductById