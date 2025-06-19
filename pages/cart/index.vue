<template>
  <section
    class="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-green-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span
            class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Cart
          </span>
        </h1>

        <!-- Shipping Notice -->
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
        >
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Shipping costs updated.
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-if="cartStore.isEmpty" class="text-center py-16">
        <div class="text-gray-400 mb-6">
          <svg
            class="w-24 h-24 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Your cart is empty
        </h2>
        <p class="text-gray-600 mb-8">Add some products to get started!</p>
        <NuxtLink
          to="/shop"
          class="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Continue Shopping
        </NuxtLink>
      </div>

      <!-- Cart Content -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <!-- Cart Table Header -->
            <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div
                class="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-700"
              >
                <div class="col-span-6">Product</div>
                <div class="col-span-2 text-center">Price</div>
                <div class="col-span-2 text-center">Quantity</div>
                <div class="col-span-2 text-center">Subtotal</div>
              </div>
            </div>

            <!-- Cart Items -->
            <div class="divide-y divide-gray-200">
              <div
                v-for="item in cartStore.items"
                :key="item.id"
                class="p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div class="grid grid-cols-12 gap-4 items-center">
                  <!-- Product Info -->
                  <div class="col-span-6 flex items-center space-x-4">
                    <!-- Remove Button -->
                    <button
                      @click="cartStore.removeItem(item.id)"
                      class="text-gray-400 hover:text-red-500 transition-colors duration-200"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    <!-- Product Image -->
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="w-16 h-16 object-cover rounded-lg"
                    />

                    <!-- Product Name -->
                    <div>
                      <NuxtLink
                        :to="`/products/${item.slug}`"
                        class="text-lime-600 hover:text-lime-700 font-medium transition-colors duration-200"
                      >
                        {{ item.name }}
                      </NuxtLink>
                    </div>
                  </div>

                  <!-- Price -->
                  <div class="col-span-2 text-center">
                    <span class="font-semibold"
                      >₦{{ item.price.toLocaleString() }}</span
                    >
                  </div>

                  <!-- Quantity -->
                  <div class="col-span-2 text-center">
                    <div class="flex items-center justify-center space-x-2">
                      <button
                        @click="
                          cartStore.updateQuantity(item.id, item.quantity - 1)
                        "
                        class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                      >
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>

                      <input
                        :value="item.quantity"
                        @input="
                          cartStore.updateQuantity(
                            item.id,
                            parseInt($event.target.value) || 1
                          )
                        "
                        type="number"
                        min="1"
                        class="w-16 text-center border border-gray-300 rounded-lg py-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
                      />

                      <button
                        @click="
                          cartStore.updateQuantity(item.id, item.quantity + 1)
                        "
                        class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                      >
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Subtotal -->
                  <div class="col-span-2 text-center">
                    <span class="font-semibold"
                      >₦{{
                        (item.price * item.quantity).toLocaleString()
                      }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Coupon Section -->
            <div class="p-6 bg-gray-50 border-t border-gray-200">
              <div class="flex flex-col sm:flex-row gap-4">
                <input
                  v-model="couponCode"
                  type="text"
                  placeholder="Coupon code"
                  class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <button
                  @click="applyCoupon"
                  class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                >
                  Apply coupon
                </button>
                <button
                  @click="updateCart"
                  class="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
                >
                  Update cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Cart Totals -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Cart totals</h2>

            <div class="space-y-4">
              <!-- Subtotal -->
              <div
                class="flex justify-between items-center py-2 border-b border-gray-200"
              >
                <span class="text-gray-700">Subtotal</span>
                <span class="font-semibold"
                  >₦{{ cartStore.subtotal.toLocaleString() }}</span
                >
              </div>

              <!-- Shipping -->
              <div class="py-2 border-b border-gray-200">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-700">Shipping</span>
                </div>
                <div class="space-y-2 text-sm">
                  <label class="flex items-center">
                    <input
                      type="radio"
                      name="shipping"
                      value="flat_rate"
                      v-model="selectedShipping"
                      class="mr-2 text-lime-500 focus:ring-lime-500"
                    />
                    <span
                      >Flat rate door step delivery in 3 to 5 working days:
                      <strong>₦3,500.00</strong></span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      type="radio"
                      name="shipping"
                      value="pickup"
                      v-model="selectedShipping"
                      class="mr-2 text-lime-500 focus:ring-lime-500"
                    />
                    <span
                      >Local pickup at closest motor pack in 1 to 3 working
                      days: <strong>₦2,000.00</strong></span
                    >
                  </label>
                </div>
              </div>

              <!-- Total -->
              <div
                class="flex justify-between items-center py-4 text-lg font-bold"
              >
                <span>Total</span>
                <span>₦{{ cartStore.total.toLocaleString() }}</span>
              </div>

              <!-- Checkout Button -->
              <button
                @click="proceedToCheckout"
                class="w-full bg-gradient-to-r from-lime-500 to-cyan-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import { useCartStore } from "~/stores/cart";
  import { useSeoMeta } from "#app";
  import { navigateTo } from "#app";

  // Cart store
  const cartStore = useCartStore();

  // Reactive data
  const couponCode = ref("");
  const selectedShipping = ref("flat_rate");

  // SEO Meta
  useSeoMeta({
    title: "Shopping Cart - AMAN Blessed Naturals",
    description:
      "Review your selected natural products and proceed to checkout. Secure shopping with fast delivery options.",
    keywords:
      "shopping cart, checkout, AMAN Blessed Naturals, natural products order",
    ogTitle: "Your Shopping Cart - AMAN Blessed Naturals",
    ogDescription: "Review and checkout your natural products order.",
    ogType: "website",
  });

  // Methods
  const applyCoupon = () => {
    if (couponCode.value.trim()) {
      // Implement coupon logic here
      alert(`Coupon "${couponCode.value}" applied!`);
      couponCode.value = "";
    }
  };

  const updateCart = () => {
    // Cart is automatically updated via the store
    alert("Cart updated!");
  };

  const proceedToCheckout = () => {
    // Navigate to checkout page
    navigateTo("/checkout");
  };
</script>

<style scoped>
  /* Custom radio button styling */
  input[type="radio"]:checked {
    background-color: #84cc16;
    border-color: #84cc16;
  }

  /* Smooth transitions */
  .transition-all {
    transition: all 0.2s ease-in-out;
  }

  /* Sticky positioning for cart totals */
  .sticky {
    position: sticky;
  }
</style>
