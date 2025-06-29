<template>
  <!-- Hero Section Component -->
  <Hero ref="heroRef" />

  <!-- Testimonials Section Component -->
  <Testimonials ref="testimonialsRef" />

  <!-- FAQ Section Component -->
  <FAQ ref="faqRef" />
</template>

<script setup>
  import { ref, onMounted, inject } from "vue";
  import { gsap } from "gsap";
  import { useSeoMeta } from "#app";

  // Component refs
  const heroRef = ref(null);
  const testimonialsRef = ref(null);
  const faqRef = ref(null);

  // Inject the layout timeline to coordinate animations
  const layoutTimeline = inject("layoutTimeline");

  let heroTl = null;

  // SEO Meta
  useSeoMeta({
    title: "AMAN Blessed Naturals - Natural Cosmetics & Lifestyle Products",
    description:
      "Discover AMAN Blessed Naturals - your destination for 100% natural, chemical-free cosmetics and lifestyle products. NAFDAC certified oils with zero cruelty guarantee.",
    keywords:
      "natural cosmetics, organic skincare, chemical-free products, NAFDAC certified, healthy lifestyle, natural oils",
    ogTitle: "AMAN Blessed Naturals - Natural Cosmetics & Lifestyle Products",
    ogDescription:
      "100% natural, chemical-free cosmetics and lifestyle products with zero cruelty guarantee.",
    ogType: "website",
  });

  // Animation setup
  onMounted(() => {
    heroTl = heroRef.value?.animateHero ? heroRef.value.animateHero() : null;

    // Wait for layout timeline to be available, then add hero animations
    if (layoutTimeline?.value && heroTl) {
      layoutTimeline.value.add(heroTl, "-=0.5");
    } else if (heroTl) {
      // Fallback if layout timeline isn't available
      setTimeout(() => {
        //heroRef.value.animateHero() // Already called above
      }, 500);
    }

    // Note: Testimonials and FAQ animations are handled by ScrollTrigger in their components
  });
</script>
