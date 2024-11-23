import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import { View, Text, FlatList } from 'react-native'

const ProductScreen = () => {
  return (
    <View className='flex flex-1 px-3 mt-5'>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='mb-4'>
            <Text className='text-xl font-bold text-blue-900/90'>{item.title}</Text>
            <Text className='text-normal'>{item.description}</Text>
            <View className='flex flex-row justify-between mt-2'>
              <Text className='text-lg font-bold'>${item.price}</Text>
              <Link href={`/products/${item.id}`}>Ver Detalles</Link>
            </View>
          </View>
        )}
      />
    </View>
  )
}
export default ProductScreen