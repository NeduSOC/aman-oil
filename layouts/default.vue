<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
    <!-- Navigation Component -->
    <Navbar ref="navbarRef" />

    <!-- Page Content Slot -->
    <main>
      <slot />
    </main>

    <!-- Footer Component -->
    <Footer ref="footerRef" />

    <!-- Toast Component -->
    <Toast />

    <!-- Floating Action Button -->
    <div class="fixed bottom-8 right-8 z-40" ref="fab">
      <button
        class="bg-gradient-to-r from-lime-500 to-cyan-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, provide, nextTick } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  // Register GSAP plugins
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Component refs
  const navbarRef = ref(null);
  const footerRef = ref(null);
  const fab = ref(null);

  // Create a layout timeline that pages can add to
  const layoutTimeline = ref(null);

  // Animation setup
  onMounted(async () => {
    // Wait for components to be ready
    await nextTick();

    // Create master timeline for layout animations
    layoutTimeline.value = gsap.timeline();

    // Add navbar animations
    if (navbarRef.value?.animateNavbar) {
      const navbarTl = navbarRef.value.animateNavbar();
      if (navbarTl) {
        layoutTimeline.value.add(navbarTl, 0);
      }
    }

    // Add footer animations (triggered on scroll)
    if (footerRef.value?.animateFooter && typeof window !== "undefined") {
      ScrollTrigger.create({
        trigger: footerRef.value.$el,
        start: "top 80%",
        onEnter: () => {
          footerRef.value.animateFooter();
        },
        once: true,
      });
    }

    // FAB animation
    if (fab.value) {
      layoutTimeline.value.fromTo(
        fab.value,
        { scale: 0, rotation: 180 },
        { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.3"
      );
    }
  });

  // Provide the timeline to child pages so they can coordinate animations
  provide("layoutTimeline", layoutTimeline);

  // Cleanup
  onUnmounted(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  });
</script>

<style scoped>
  /* Custom animations */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom gradient backgrounds */
  .bg-gradient-custom {
    background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
  }

  /* Hover effects */
  .hover-lift {
    transition: transform 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-5px);
  }
</style>
