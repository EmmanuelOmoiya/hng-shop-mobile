import { Stack, router } from "expo-router";
import { View, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg';

const OrderSuccess = () => {
  let timeout = setTimeout(()=>{
    router.replace('/')
    return () =>{
        clearTimeout(timeout)
    }
  }, 1000)

    return(
        <View className="bg-[#101010] flex flex-1 w-full h-full items-center justify-center">
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                />
            <View className="bg-[#e66945] w-[150] h-[150] p-4 rounded-full">
                <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                    <Path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </Svg>

            </View>
            <Text className="text-lg font-mregular text-white mt-4">Order Succcessful</Text>
        </View>
    )
};
export default OrderSuccess;