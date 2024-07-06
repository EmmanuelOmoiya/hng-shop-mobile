// import React, { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext({
//   cart: [],
//   addToCart: (product: any)=> void,
// });
// export const useCartContext = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCartContext must be used within a ContextProvider");
//   }
//   return context;
// };
  

// const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (product) => {
//       setCart((prevCart) => {
//         const existingProduct = prevCart.find((item) => item.id === product.id);
//         if (existingProduct) {
//           return prevCart.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           );
//         }
//         return [...prevCart, { ...product, quantity: 1 }];
//       });
//     };
  
//     const removeFromCart = (productId) => {
//       setCart((prevCart) => {
//         const existingProduct = prevCart.find((item) => item.id === productId);
//         if (existingProduct.quantity === 1) {
//           return prevCart.filter((item) => item.id !== productId);
//         }
//         return prevCart.map((item) =>
//           item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
//         );
//       });
//     };
  
//     const clearCart = () => {
//       setCart([]);
//     };

//   return (
//     <CartContext.Provider
//         value={{ cart, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  quantity: number;
  // [key: string]: any; // If you have other product properties
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct && existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
