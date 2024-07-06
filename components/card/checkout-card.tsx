import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useCartContext } from "@/context/cart-context";

const CheckoutCard = ({ data }:{ data: any }) => {
    return(
        <View className="flex mb-4 flex-row gap-x-3 w-full " style={{
            width: '100%'
        }}>
            <Image className="h-full w-[90]" transition={100} source={data.image} />
            <View>
                <Text className="text-md text-white font-mregular">{data.description}</Text>
                <Text className="text-sm font-mregular text-white/80 mt-2">${data.price}</Text>
                <View className="flex flex-row justify-between">
                    <Counter data={data} />
                </View>
            </View>
        </View>
    )
};
export default CheckoutCard;


const Counter = ({ data }:{ data: any }) => {
    const { addToCart, removeFromCart } = useCartContext();
    const handleAddToCart = () => {
        const product = { ...data, quantity: 1 };
        addToCart(product);
    };
    return(
        <View className="flex flex-row items-center gap-x-3 mt-3">
            <TouchableOpacity onPress={()=> removeFromCart(data.id)}  className="bg-[#e66945] p-2 px-3 rounded-md items-center text-center justify-center">
                <Text className="text-white text-md font-mregular">-</Text>
            </TouchableOpacity>
            <Text className="text-white font-mregular">{data.quantity}</Text>
            <TouchableOpacity onPress={()=> handleAddToCart()} className="bg-[#e66945] p-2 px-3 rounded-md items-center text-center justify-center">
                <Text className="text-white text-md font-mregular">+</Text>
            </TouchableOpacity>
        </View>
    )
}