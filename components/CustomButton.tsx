import React from 'react'
import { View, Text, Pressable, PressableProps } from 'react-native'

interface Props extends PressableProps {
  children: string,
  color: string,
  onPress?: () => void
}

const CustomButton = React.forwardRef(({ children, color, onPress }: Props, ref: React.Ref<View>) => {

  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color]


  return (
    <Pressable
      className={`${btnColor}  text-white font-semibold text-center py-3 rounded-md`}
      onPress={onPress}
      ref={ref}
    >
      <Text className='font-semibold text-center text-white'>{children}</Text>
    </Pressable>
  )
})
export default CustomButton