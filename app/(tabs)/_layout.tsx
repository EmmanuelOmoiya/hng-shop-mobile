import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import ProductsIcon from '@/components/layout/products'
import CheckoutIcon from '@/components/layout/checkout'
import CartProvider from '@/context/cart-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    // <CartProvider>
    <Tabs
      initialRouteName='index'
      screenOptions={{
        tabBarActiveBackgroundColor: "#1c1a1a",
        headerShown: true,
        headerStyle:{
          alignItems: 'center'
        },
        tabBarActiveTintColor: "#e66945",
        tabBarShowLabel: false,
        tabBarLabelStyle:{
          fontFamily: 'MonumentRegular',
          textAlign: 'center'
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          height: 75,
          // border: 'none',
          borderTopColor: '#1c1a1a',
          backgroundColor: '#101010'
        },
        tabBarItemStyle: {
          paddingVertical: 0
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, focused }) => (
            <ProductsIcon focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          title: 'Checkout',
          tabBarIcon: ({ color, focused }) => (
            <CheckoutIcon focused={focused} />
          ),
        }}
      />
      {/*<Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      /> */}
      {/* {tabs.map((tab, index) => (
        <Tabs.Screen
          name={tab.title.toLowerCase()}
          key={index}
          options={{
            headerStyle: {
                // backgroundColor: '#101010',
                height: 100
                // paddingLeft: 45
            },
            // headerShadowVisible: false,
            // headerTitleStyle: {
            //   display: "none",
            // },
            headerShown: true,
            title: tab.title,
            tabBarIcon: ({ boolean, color, size }) => tab.icon,
            headerLeft: () => <HeaderLeft />,
            headerRight: ()=> <HeaderRight />
          }}
        />
      ))} */}
    </Tabs>
    // </CartProvider>
  );
}


// <Tabs
// initialRouteName='index'
// screenOptions={{
//   tabBarActiveBackgroundColor: "#00cc66",
//   tabBarStyle: {
//     // elevation: 0,
//     paddingTop: 4,
//     paddingLeft: 4,
//     paddingRight: 4,
//     paddingBottom: 4,
//     left: 16,
//     position: "absolute",
//     // bottom: 40,
//     bottom: 25,
//     right: 16,
//     borderTopWidth: 0,
//     height: 50,
//     alignItems: "center",
//     borderRadius: 100,
//     backgroundColor: "#0E7542",
//   },
//   tabBarActiveTintColor: "#ffffff",
//   tabBarShowLabel: false,
//   tabBarHideOnKeyboard: true,
//   tabBarItemStyle: {
//     borderRadius: 200,
//     paddingHorizontal: 24,
//   },
// }}
// >
// {tabs.map((tab, index) => (
//   <Tabs.Screen
//     name={tab.name}
//     key={index}
//     options={{
//       headerStyle: {
//           // backgroundColor: '#101010',
//           // height: 100
//           // paddingLeft: 45
//       },
//       headerShadowVisible: false,
//       headerShown: tab.shown,
//       headerTitleStyle: {
//         display: "none",
//       },
//       tabBarIcon: ({ color, size }) => tab.icon,
//       // headerLeft: () => <Header />,
//       // headerRight: ()=> <HeaderRight />
//     }}
//   />
// ))}
// </Tabs>