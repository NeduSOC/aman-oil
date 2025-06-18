<template>
  <nav
    class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50"
    ref="navbar"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0" ref="logo">
          <div
            class="w-12 h-12 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-xl">AB</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8" ref="navItems">
            <a
              href="#home"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >Home</a
            >
            <a
              href="#shop"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >Shop</a
            >
            <a
              href="#about"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >About Us</a
            >
            <a
              href="#contact"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >Contact</a
            >
            <a
              href="#privacy"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >Privacy Policy</a
            >
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-lime-600 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden bg-white border-t border-gray-200"
        ref="mobileMenu"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md"
            >Home</a
          >
          <a
            href="#shop"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md"
            >Shop</a
          >
          <a
            href="#about"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md"
            >About Us</a
          >
          <a
            href="#contact"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md"
            >Contact</a
          >
          <a
            href="#privacy"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md"
            >Privacy Policy</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from "vue";

  const mobileMenuOpen = ref(false);

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };
</script>

<style scoped></style>
