import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size, quantity = 1) => {
    const product = products.find(
      (item) => String(item.id) === String(itemId)
    );

    if (!product) {
      toast.error("Produit introuvable");
      return;
    }

    const selectedSize =
      size || product.defaultOption || product.options?.[0] || "Standard";

    setCartItems((previousCart) => {
      const cartData = structuredClone(previousCart);

      if (!cartData[itemId]) {
        cartData[itemId] = {};
      }

      cartData[itemId][selectedSize] =
        (cartData[itemId][selectedSize] || 0) + quantity;

      return cartData;
    });

    toast.success("Produit ajouté au panier");
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        totalCount += cartItems[itemId][size];
      }
    }

    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((previousCart) => {
      const cartData = structuredClone(previousCart);

      if (!cartData[itemId] || cartData[itemId][size] === undefined) {
        return previousCart;
      }

      if (quantity <= 0) {
        delete cartData[itemId][size];

        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      } else {
        cartData[itemId][size] = quantity;
      }

      return cartData;
    });
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const product = products.find(
        (item) => String(item.id) === String(itemId)
      );

      if (!product) continue;

      for (const size in cartItems[itemId]) {
        totalAmount += product.price * cartItems[itemId][size];
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;