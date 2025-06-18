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
              <!-- <img
                src="/images/aman.jpg"
                alt="Natural cosmetics and lifestyle products"
                class="w-full h-full"
              /> -->
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
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

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

    if (mobileMenuOpen.value) {
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

  // Expose animation function for parent component
  const animateNavbar = () => {
    const tl = gsap.timeline();

    // Reset navbar to hidden state for animation
    gsap.set(navbar.value, { y: -100, opacity: 0 });

    // Navbar animation
    tl.fromTo(
      navbar.value,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Logo animation
    tl.fromTo(
      logo.value,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Nav items animation
    tl.fromTo(
      navItems.value?.children || [],
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );

    return tl;
  };

  onMounted(() => {
    // Run animation
    animateNavbar();

    // Navbar background scroll effect
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onEnter: () => {
        navbar.value?.classList.add("bg-white/95", "shadow-md");
      },
      onLeave: () => {
        navbar.value?.classList.remove("bg-white/95", "shadow-md");
      },
      onEnterBack: () => {
        navbar.value?.classList.add("bg-white/95", "shadow-md");
      },
      onLeaveBack: () => {
        navbar.value?.classList.remove("bg-white/95", "shadow-md");
      },
    });
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
  a {
    transition: all 0.2s ease-in-out;
  }

  /* Logo hover effect */
  .logo-hover {
    transition: transform 0.2s ease;
  }

  .logo-hover:hover {
    transform: scale(1.05);
  }
</style>
