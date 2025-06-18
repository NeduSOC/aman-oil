<template>
  <section class="py-16 bg-white" ref="testimonialsSection">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Heading -->
      <div class="text-center mb-12" ref="heading">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span
            class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Testimonials
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          See what our customers are saying about their experience with AMAN
          Blessed Naturals
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        ref="testimonialsGrid"
      >
        <!-- Testimonial 1 -->
        <div class="testimonial-card group h-80" ref="testimonial1">
          <div
            class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gray-100 w-full h-full"
          >
            <img
              src="/images/review1.jpg"
              alt="Customer testimonial 1"
              class="w-full h-full object-contain"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm font-medium">Amazing natural products!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="testimonial-card group h-80" ref="testimonial2">
          <div
            class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gray-100 w-full h-full"
          >
            <img
              src="/images/review2.jpg"
              alt="Customer testimonial 2"
              class="w-full h-full object-contain"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm font-medium">Love the quality and care!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="testimonial-card group h-80" ref="testimonial3">
          <div
            class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gray-100 w-full h-full"
          >
            <img
              src="/images/review3.jpg"
              alt="Customer testimonial 3"
              class="w-full h-full object-contain"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm font-medium">Best natural skincare ever!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 4 -->
        <div class="testimonial-card group h-80" ref="testimonial4">
          <div
            class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gray-100 w-full h-full"
          >
            <img
              src="/images/review4.jpg"
              alt="Customer testimonial 4"
              class="w-full h-full object-contain"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm font-medium">Transformed my skin routine!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 5 -->
        <div class="testimonial-card group h-80" ref="testimonial5">
          <div
            class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gray-100 w-full h-full"
          >
            <img
              src="/images/review5.jpg"
              alt="Customer testimonial 5"
              class="w-full h-full object-contain"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm font-medium">Pure ingredients, pure results!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 6 -->
        <div class="testimonial-card group h-80" ref="testimonial6">
          <div
            class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gray-100 w-full h-full"
          >
            <img
              src="/images/review6.jpg"
              alt="Customer testimonial 6"
              class="w-full h-full object-contain"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm font-medium">Highly recommend to everyone!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12" ref="cta">
        <p class="text-lg text-gray-600 mb-6">
          Join thousands of satisfied customers who trust AMAN Blessed Naturals
        </p>
        <button
          class="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Share Your Story
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Template refs
  const testimonialsSection = ref(null);
  const heading = ref(null);
  const testimonialsGrid = ref(null);
  const cta = ref(null);

  // Individual testimonial refs
  const testimonial1 = ref(null);
  const testimonial2 = ref(null);
  const testimonial3 = ref(null);
  const testimonial4 = ref(null);
  const testimonial5 = ref(null);
  const testimonial6 = ref(null);

  // Expose animation function for parent component
  const animateTestimonials = () => {
    const tl = gsap.timeline();

    // Animate heading
    tl.fromTo(
      heading.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Animate testimonial cards with stagger
    const testimonialCards = [
      testimonial1.value,
      testimonial2.value,
      testimonial3.value,
      testimonial4.value,
      testimonial5.value,
      testimonial6.value,
    ].filter(Boolean);

    tl.fromTo(
      testimonialCards,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate CTA
    tl.fromTo(
      cta.value,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    return tl;
  };

  onMounted(() => {
    // Set up scroll-triggered animation
    ScrollTrigger.create({
      trigger: testimonialsSection.value,
      start: "top 70%",
      onEnter: () => {
        animateTestimonials();
      },
      once: true,
    });

    // Add parallax effect to testimonial cards
    const testimonialCards = [
      testimonial1.value,
      testimonial2.value,
      testimonial3.value,
      testimonial4.value,
      testimonial5.value,
      testimonial6.value,
    ].filter(Boolean);

    testimonialCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 0 },
        {
          y: -20 * (index % 2 === 0 ? 1 : -1), // Alternate direction for visual interest
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
  });

  // Expose methods to parent
  defineExpose({
    animateTestimonials,
  });
</script>

<style scoped>
  .testimonial-card {
    opacity: 0;
    transform: translateY(80px) scale(0.9);
  }

  /* Custom hover effects */
  .testimonial-card:hover {
    transform: translateY(-5px) scale(1.02);
  }

  /* Staggered animation delays for visual appeal */
  .testimonial-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .testimonial-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .testimonial-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .testimonial-card:nth-child(4) {
    animation-delay: 0.4s;
  }
  .testimonial-card:nth-child(5) {
    animation-delay: 0.5s;
  }
  .testimonial-card:nth-child(6) {
    animation-delay: 0.6s;
  }
</style>
