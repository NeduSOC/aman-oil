<template>
  <section
    class="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-green-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-12" ref="shopHeader">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span
            class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Our Products
          </span>
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our range of 100% natural products, crafted with love and
          care for your wellness journey
        </p>
      </div>

      <!-- Loading State -->
      <div
        v-if="pending"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="n in 8"
          :key="n"
          class="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
        >
          <div class="h-64 bg-gray-200"></div>
          <div class="p-6">
            <div class="h-4 bg-gray-200 rounded mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
            <div class="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="text-red-500 mb-4">
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
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Failed to load products
        </h3>
        <p class="text-gray-600 mb-4">{{ error.message }}</p>
        <button
          @click="refresh()"
          class="bg-lime-500 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>

      <!-- Products Grid -->
      <div
        v-else-if="data?.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        ref="productsGrid"
      >
        <div
          v-for="product in data"
          :key="product._id"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Product Image -->
          <div class="relative h-64 overflow-hidden">
            <NuxtLink :to="`/products/${product.slug.current}`">
              <img
                :src="product.image.asset.url"
                :alt="product.name"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </NuxtLink>
            <div
              v-if="!product.inStock"
              class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
            >
              Out of Stock
            </div>
          </div>

          <!-- Product Info -->
          <div class="p-6">
            <NuxtLink :to="`/products/${product.slug.current}`">
              <h3
                class="text-lg font-semibold text-gray-900 mb-2 hover:text-lime-600 transition-colors duration-200"
              >
                {{ product.name }}
              </h3>
            </NuxtLink>

            <p class="text-2xl font-bold text-lime-600 mb-4">
              ₦{{ product.price.toLocaleString() }}
            </p>

            <!-- Add to Cart Button -->
            <button
              @click="addToCart(product)"
              :disabled="!product.inStock"
              class="w-full bg-gradient-to-r from-lime-500 to-cyan-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="product.inStock">Add to Cart</span>
              <span v-else>Out of Stock</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
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
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          No products found
        </h3>
        <p class="text-gray-600">Check back soon for new products!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted, watch } from "vue";
  import { useCartStore } from "~/stores/cart";
  import { useToast } from "~/composables/useToast";
  import { useSeoMeta } from "#app";
  import { useFetch } from "#app";

  // Cart store and toast
  const cartStore = useCartStore();
  const { success } = useToast();

  // Template refs
  const shopHeader = ref(null);
  const productsGrid = ref(null);

  // Fetch products from Sanity
  const { data, pending, error, refresh } = await useFetch("/api/products");

  // SEO Meta
  useSeoMeta({
    title: "Shop - AMAN Blessed Naturals | Natural Products Store",
    description:
      "Shop our collection of 100% natural products including oils, powders, and wellness items. NAFDAC certified with zero chemical additives.",
    keywords:
      "natural products shop, AMAN Blessed Naturals store, organic oils, natural powders, chemical-free products",
    ogTitle: "Shop Natural Products - AMAN Blessed Naturals",
    ogDescription:
      "Discover our range of 100% natural, chemical-free products for your wellness journey.",
    ogType: "website",
  });

  // Add to cart function
  const addToCart = (product) => {
    cartStore.addItem(product);
    success(`${product.name} added to cart!`, 3000);
  };

  // Animations
  onMounted(() => {
    // Simple fade-in animation for header
    if (shopHeader.value) {
      shopHeader.value.style.opacity = "0";
      shopHeader.value.style.transform = "translateY(20px)";

      setTimeout(() => {
        shopHeader.value.style.transition = "all 0.6s ease";
        shopHeader.value.style.opacity = "1";
        shopHeader.value.style.transform = "translateY(0)";
      }, 100);
    }
  });

  // Watch for data changes to animate products
  watch(
    data,
    (newData) => {
      if (newData && productsGrid.value) {
        const products = productsGrid.value.children;
        Array.from(products).forEach((product, index) => {
          product.style.opacity = "0";
          product.style.transform = "translateY(20px)";

          setTimeout(() => {
            product.style.transition = "all 0.4s ease";
            product.style.opacity = "1";
            product.style.transform = "translateY(0)";
          }, index * 100);
        });
      }
    },
    { immediate: true }
  );
</script>

<style scoped>
  /* Loading animation */
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Product card hover effects */
  .product-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
</style>
