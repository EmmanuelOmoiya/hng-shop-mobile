import { Stack } from 'expo-router';
import { Search } from '@/components/ui/icons'
import HeaderRight from '@/components/layout/header-right';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import ProductCard from '@/components/card/product-card';
import { products } from '@/constants/Products';
import { wp } from '@/lib/utils';


export default function HomeScreen() {
  return (
    <View className='bg-[#101010] h-full w-full p-4 pb-0'>
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
    <View className="min-h-[3]" style={{ width: "100%" }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard width={"100%"} image={item.image} price={item.price} name={item.name} id={item.id} />}
        numColumns={2}
      />
      {/* <MasonryFlashList 
        data={products}
        numColumns={2}
        initialNumToRender={10}
        // contentContainerStyle={{
        //   // minHeight: 3,
        //   width: 100
        // }}
        renderItem={({ item }) => <ProductCard image={item.image} price={item.price} name={item.price} />}
        estimatedItemSize={200}
      /> */}
   
    </View>
  </View>
    );
}
