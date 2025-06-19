import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    isOpen: false,
  }),

  getters: {
    itemCount: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),

    subtotal: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),

    shipping: () => 3500, // Flat rate shipping

    total: (state) => {
      const subtotal = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return subtotal + 3500; // Add shipping
    },

    isEmpty: (state) => state.items.length === 0,
  },

  actions: {
    addItem(product, quantity = 1) {
      const existingItem = this.items.find((item) => item.id === product._id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image.asset.url,
          quantity,
          slug: product.slug.current,
        });
      }
    },

    removeItem(itemId) {
      const index = this.items.findIndex((item) => item.id === itemId);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },

    updateQuantity(itemId, quantity) {
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        if (quantity <= 0) {
          this.removeItem(itemId);
        } else {
          item.quantity = quantity;
        }
      }
    },

    clearCart() {
      this.items = [];
    },

    toggleCart() {
      this.isOpen = !this.isOpen;
    },

    openCart() {
      this.isOpen = true;
    },

    closeCart() {
      this.isOpen = false;
    },
  },

  persist: true, // This will persist the cart in localStorage
});
