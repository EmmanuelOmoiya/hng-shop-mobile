import { View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { router } from 'expo-router';

const ProductCard = ({ image, name, price, id }:{ image: string; name: string; price: number; id: number; }) => {
    return (
        <Pressable onPress={()=>router.push(`/product/${id}`)} className="">
            <View className=" mb-[20] ">
                {/* <Image className="w-[100%] h-[200] rounded-md"  contentFit="cover" transition={100} source={image} /> */}
                <Image transition={100} className="h-[200] w-[200] rounded-md" source={image} />
                <View className="mt-4 mb-2">
                    <Text className="font-mregular text-white text-md">
                        {name}
                    </Text>
                </View>
                <Text className="font-mregular text-[#f48602] text-md">${price}</Text>
            </View>
        </Pressable>
    )
};
export default ProductCard;