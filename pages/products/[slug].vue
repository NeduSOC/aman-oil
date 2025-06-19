<template>
  <section
    class="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-green-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Loading State -->
      <div v-if="pending" class="animate-pulse">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="h-96 bg-gray-200 rounded-2xl"></div>
          <div class="space-y-4">
            <div class="h-8 bg-gray-200 rounded"></div>
            <div class="h-6 bg-gray-200 rounded w-1/3"></div>
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded w-2/3"></div>
            <div class="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Product Details -->
      <div v-else-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div class="relative">
          <img
            :src="product.image.asset.url"
            :alt="product.name"
            class="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
          <div
            v-if="!product.inStock"
            class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
          >
            Out of Stock
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {{ product.name }}
            </h1>
            <p class="text-3xl font-bold text-lime-600 mb-6">
              ₦{{ product.price.toLocaleString() }}
            </p>
          </div>

          <div v-if="product.description" class="prose prose-lg">
            <p class="text-gray-700 leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <!-- Add to Cart Section -->
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <label class="text-sm font-semibold text-gray-700"
                >Quantity:</label
              >
              <div class="flex items-center space-x-2">
                <button
                  @click="quantity = Math.max(1, quantity - 1)"
                  class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
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
                  v-model.number="quantity"
                  type="number"
                  min="1"
                  class="w-20 text-center border border-gray-300 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                />

                <button
                  @click="quantity++"
                  class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
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

            <button
              @click="addToCart"
              :disabled="!product.inStock"
              class="w-full bg-gradient-to-r from-lime-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="product.inStock">Add to Cart</span>
              <span v-else>Out of Stock</span>
            </button>
          </div>

          <!-- Product Features -->
          <div class="bg-gradient-to-r from-lime-50 to-cyan-50 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              Product Features
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-700">
                <svg
                  class="w-5 h-5 text-lime-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                100% Natural Ingredients
              </li>
              <li class="flex items-center text-gray-700">
                <svg
                  class="w-5 h-5 text-lime-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Zero Chemical Additives
              </li>
              <li class="flex items-center text-gray-700">
                <svg
                  class="w-5 h-5 text-lime-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                NAFDAC Certified
              </li>
              <li class="flex items-center text-gray-700">
                <svg
                  class="w-5 h-5 text-lime-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Cruelty-Free
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else class="text-center py-16">
        <div class="text-gray-400 mb-4">
          <svg
            class="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
        <p class="text-gray-600 mb-8">
          The product you're looking for doesn't exist.
        </p>
        <NuxtLink
          to="/shop"
          class="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Back to Shop
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import { useCartStore } from "~/stores/cart";
  import { useRoute, useFetch } from "#app";
  import { useSeoMeta } from "#app";

  // Get route params
  const route = useRoute();
  const cartStore = useCartStore();

  // Reactive data
  const quantity = ref(1);

  // Fetch product data
  const { data: product, pending } = await useFetch(
    `/api/products/${route.params.slug}`
  );

  // SEO Meta
  useSeoMeta({
    title: () =>
      product.value
        ? `${product.value.name} - AMAN Blessed Naturals`
        : "Product - AMAN Blessed Naturals",
    description: () =>
      product.value?.description ||
      "Natural product from AMAN Blessed Naturals",
    keywords: () =>
      product.value
        ? `${product.value.name}, natural products, AMAN Blessed Naturals`
        : "natural products",
    ogTitle: () => product.value?.name || "Product",
    ogDescription: () =>
      product.value?.description ||
      "Natural product from AMAN Blessed Naturals",
    ogImage: () => product.value?.image.asset.url,
    ogType: "product",
  });

  // Add to cart function
  const addToCart = () => {
    if (product.value) {
      cartStore.addItem(product.value, quantity.value);
      alert(`${quantity.value} x ${product.value.name} added to cart!`);
    }
  };
</script>

<style scoped>
  /* Product image hover effect */
  img {
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.02);
  }

  /* Quantity input styling */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
