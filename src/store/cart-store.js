import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      console.log(state, product);
      // if product already exists in cart, increment the count
      if (state.cart.some((p) => p.id === product.id)) {
        return {
          cart: state.cart.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + product.quantity }
              : p
          ),
        };
      }
      // if product is not in cart, add it

      return { cart: [...state.cart, product] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));
