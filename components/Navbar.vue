<template>
  <nav
    class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50"
    ref="navbar"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0" ref="logo">
          <NuxtLink to="/" class="block">
            <div
              class="w-12 h-12 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200"
            >
              <span class="text-white font-bold text-xl">AB</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8" ref="navItems">
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-lime-600 font-semibold"
              exact-active-class="text-lime-600 font-semibold"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/shop"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-lime-600 font-semibold"
            >
              Shop
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-lime-600 font-semibold"
            >
              About Us
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-lime-600 font-semibold"
            >
              Contact
            </NuxtLink>
            <NuxtLink
              to="/privacy"
              class="text-gray-700 hover:text-lime-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-lime-600 font-semibold"
            >
              Privacy Policy
            </NuxtLink>
          </div>
        </div>

        <!-- Cart and Mobile menu -->
        <div class="flex items-center space-x-4">
          <!-- Cart Icon -->
          <button
            @click="handleCartClick"
            class="relative p-2 text-gray-700 hover:text-lime-600 transition-colors duration-200"
          >
            <svg
              class="w-6 h-6"
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
            <!-- Cart Count Badge -->
            <span
              v-if="cartStore.itemCount > 0"
              class="absolute -top-1 -right-1 bg-lime-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
            >
              {{ cartStore.itemCount }}
            </span>
          </button>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-gray-700 hover:text-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-md p-2"
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
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden bg-white border-t border-gray-200"
        ref="mobileMenu"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            to="/"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            active-class="text-lime-600 bg-lime-50 font-semibold"
            exact-active-class="text-lime-600 bg-lime-50 font-semibold"
            @click="closeMobileMenu"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/shop"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            active-class="text-lime-600 bg-lime-50 font-semibold"
            @click="closeMobileMenu"
          >
            Shop
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            active-class="text-lime-600 bg-lime-50 font-semibold"
            @click="closeMobileMenu"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            active-class="text-lime-600 bg-lime-50 font-semibold"
            @click="closeMobileMenu"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to="/privacy"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            active-class="text-lime-600 bg-lime-50 font-semibold"
            @click="closeMobileMenu"
          >
            Privacy Policy
          </NuxtLink>
          <button
            @click="handleCartClick"
            class="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Cart ({{ cartStore.itemCount }})
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref, onMounted, nextTick } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useCartStore } from "~/stores/cart";
  import { useToast } from "~/composables/useToast";
  import { navigateTo } from "#app";

  // Cart store and toast
  const cartStore = useCartStore();
  const { warning } = useToast();

  // Register GSAP plugins
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Reactive data
  const mobileMenuOpen = ref(false);

  // Template refs
  const navbar = ref(null);
  const logo = ref(null);
  const navItems = ref(null);
  const mobileMenu = ref(null);

  // Methods
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;

    if (mobileMenuOpen.value && mobileMenu.value) {
      gsap.fromTo(
        mobileMenu.value,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
  };

  const handleCartClick = () => {
    if (cartStore.isEmpty) {
      warning("Empty cart, please select a product to purchase", 4000);
    } else {
      navigateTo("/cart");
    }
    closeMobileMenu();
  };

  // Expose animation function for parent component
  const animateNavbar = () => {
    if (!navbar.value) return null;

    const tl = gsap.timeline();

    // Navbar animation
    tl.fromTo(
      navbar.value,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Logo animation
    if (logo.value) {
      tl.fromTo(
        logo.value,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      );
    }

    // Nav items animation
    if (navItems.value?.children) {
      tl.fromTo(
        navItems.value.children,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
    }

    return tl;
  };

  onMounted(async () => {
    // Wait for next tick to ensure DOM is ready
    // await nextTick();
    animateNavbar();

    // Ensure navbar is visible by default
    if (navbar.value) {
      gsap.set(navbar.value, {
        y: 0,
        opacity: 1,
        visibility: "visible",
      });
    }

    // Only set up ScrollTrigger if we're in the browser
    if (typeof window !== "undefined") {
      ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        onUpdate: (self) => {
          if (navbar.value) {
            if (self.direction === 1 && self.progress > 0.1) {
              // Scrolling down
              navbar.value.classList.add("bg-white/95", "shadow-md");
            } else if (self.direction === -1 || self.progress <= 0.1) {
              // Scrolling up or at top
              navbar.value.classList.remove("bg-white/95", "shadow-md");
            }
          }
        },
      });
    }
  });

  // Expose methods to parent
  defineExpose({
    animateNavbar,
  });
</script>

<style scoped>
  /* Enhanced active link styles */
  .router-link-active {
    color: #65a30d !important; /* lime-600 */
    font-weight: 600;
  }

  .router-link-exact-active {
    color: #65a30d !important; /* lime-600 */
    font-weight: 600;
  }

  /* Mobile active link background */
  .router-link-active.block {
    background-color: #f7fee7; /* lime-50 */
  }

  /* Smooth transitions */
  a,
  button {
    transition: all 0.2s ease-in-out;
  }

  /* Ensure navbar is always visible */
  nav {
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* Cart badge animation */
  .cart-badge {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
</style>
