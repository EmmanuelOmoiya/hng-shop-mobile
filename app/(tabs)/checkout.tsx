import { Stack, router } from 'expo-router';
import { Search } from '@/components/ui/icons'
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CheckoutCard from '@/components/card/checkout-card';
import { useCartContext } from "@/context/cart-context";
import React from 'react';

export default function CheckoutScreen() {
  const { cart, clearCart } = useCartContext();
  const [mainCart, setMainCart] = React.useState<any[] | null>(null);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [totalQuantity, setTotalQuantity] = React.useState(0);
  React.useEffect(()=>{
    if(cart.length > 0){
      setMainCart(cart)
      setTotalQuantity(cart.reduce((total, cart)=>  total + cart.quantity, 0))
      setTotalPrice(cart.reduce((total, cart)=>  total + (cart.quantity * cart.price), 0.00))
    } else {
      setMainCart(null)
    }
  },[cart])
  return (
    <View className='bg-[#101010] h-full w-full pb-0'>
      <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#101010",
            },
            headerShadowVisible: false,
            headerBackVisible: true,
            headerTitle:"Odyah",
            headerTitleStyle:{
              fontFamily: 'MonumentUltraBold',
              color: '#fff',
              fontSize: 20,
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <View className="pl-5">
                <Search />
              </View>
            )
          }}
        />
    <StatusBar backgroundColor="#101010" style="light" />
    <View className="flex flex-1 w-full jsutify-between h-full">
      <View className="h-full w-full p-4">
        <FlatList
        data={cart}
        ListEmptyComponent={<ListEmptyCompoenent />}
        renderItem={({ item }) => <CheckoutCard data={item} />}
      />
      </View>
      {
        mainCart !== null &&
        <View className="absolute bottom-0 w-full bg-[#1c1a1a] px-3 py-5 flex flex-1 flex-row justify-between">
          <View>
            <Text className="text-lg font-mregular mb-1 text-white">${totalPrice.toLocaleString()}</Text>
            <Text className="text-md font-mregular text-sm text-white">{totalQuantity} items</Text>
          </View>
          <TouchableOpacity onPress={()=>{
            clearCart()
            router.push('/order-success')
          }} className="bg-[#e66945] rounded-sm py-3 px-5 text-center items-center justify-center flex">
            <Text className="text-white font-mregular items-center text-center">Checkout</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  </View>
    );
}

const ListEmptyCompoenent = () => {
  return (
    <View className="flex flex-1 justify-center items-center text-center my-16">
      <Text className="text-lg text-white font-mregular text-center items-center">No product added to cart </Text>
    </View>
  )
}