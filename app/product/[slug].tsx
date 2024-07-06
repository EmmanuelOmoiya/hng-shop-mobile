import { Stack, router, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { products } from '@/constants/Products';
import Back from '@/components/layout/back';
import React from "react";
import { useCartContext } from "@/context/cart-context";
import { Image } from 'expo-image';

const Product = () => {
    const { slug } = useLocalSearchParams();
    const { cart, addToCart, removeFromCart, clearCart } = useCartContext();
    let mainProduct = products.filter((product)=> `${product.id}` === slug);
    const [isInCart, setIsInCart] = React.useState<{} | null>(null);
    const handleAddToCart = () => {
        const product = { ...mainProduct[0], quantity: 1 };
        addToCart(product);
    };

    
    React.useEffect(()=>{
        let product = cart.filter((product)=> `${product.id}` === slug);
        if(product.length > 0){
            setIsInCart(product[0])
        } else {
            setIsInCart(null)
        }
    },[cart])


    return(
        <View className="bg-[#101010] flex flex-1 w-full h-full">
            <Stack.Screen
                options={{
                    headerStyle: {
                    backgroundColor: "#101010",
                    },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle:"DETAILS",
                    headerTitleStyle:{
                    fontFamily: 'MonumentRegular',
                    color: '#fff',
                    fontSize: 19,
                    },
                    headerTitleAlign: "center",
                    headerLeft: () => (
                    <View className="pl-0">
                        <Back />
                    </View>
                    )
                }}
            />
            <View className="p-4 w-full">
            <Image transition={100} className="h-[300] w-[100%] rounded-md" source={mainProduct[0].image} />
                <View className="flex flex-row">
                    <Image transition={100} className="h-full w-[90]" source={mainProduct[0].image_1} />
                    <Image transition={100} className="h-full w-[90]" source={mainProduct[0].image_2} />
                </View>
                <Text className="text-white font-mregular my-3 text-lg">{mainProduct[0].name}</Text>
                <Text className="text-white font-mregular text-sm">Size: XL</Text>
                <Text className="text-white font-mregular text-sm">Price: ${mainProduct[0].price}</Text>
                <Text className="text-white font-mregular text-sm">Quantity: {parseInt("50000").toLocaleString()}</Text>
            </View>
            {
                isInCart !== null ? 
                <View className="flex items-center flex-row absolute bottom-0 w-full p-3 justify-between">
                    <TouchableOpacity onPress={()=> removeFromCart(parseInt(slug as string))} className="bg-[#e66945] p-4 px-6 rounded-md items-center text-center justify-center">
                        <Text className="font-mregular text-white text-lg">-</Text>
                    </TouchableOpacity>
                    <Text className="font-mregular text-white text-xl">{isInCart.quantity}</Text>
                    <TouchableOpacity onPress={()=> handleAddToCart()} className="bg-[#e66945] p-4 px-6 rounded-md items-center text-center justify-center">
                        <Text className="font-mregular text-white text-lg">+</Text>
                    </TouchableOpacity>
                </View>
                :
                <View className="absolute bottom-0 w-full flex justify-center text-center items-center">
                    <Text className="text-7xl text-center items-center -bottom-6 text-white -z-1 font-abold absolute">Odyah</Text>
                    <Pressable onPress={()=> handleAddToCart()} className="bg-[#e66945]/95 h-75 items-center flex justify-center  h-20 w-full">
                        <Text className="font-mregular text-white text-lg items-center text-center">ADD TO CART</Text>
                    </Pressable>
                </View>
            }
        </View>
    )
};
export default Product;