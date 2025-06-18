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

      <!-- Testimonials Flex Container -->
      <div
        class="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8"
        ref="testimonialsContainer"
      >
        <!-- Testimonial 1 -->
        <div
          class="testimonial-item flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
          ref="testimonial1"
        >
          <div
            class="testimonial-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-gray-50 to-gray-100 h-80"
          >
            <img
              src="/images/review1.jpg"
              alt="Customer testimonial 1"
              class="absolute inset-0 w-full h-full object-contain rounded-2xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p class="text-sm font-medium">Amazing natural products!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div
          class="testimonial-item flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
          ref="testimonial2"
        >
          <div
            class="testimonial-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-gray-50 to-gray-100 h-80"
          >
            <img
              src="/images/review2.jpg"
              alt="Customer testimonial 2"
              class="absolute inset-0 w-full h-full object-contain rounded-2xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p class="text-sm font-medium">Love the quality and care!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div
          class="testimonial-item flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
          ref="testimonial3"
        >
          <div
            class="testimonial-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-gray-50 to-gray-100 h-80"
          >
            <img
              src="/images/review3.jpg"
              alt="Customer testimonial 3"
              class="absolute inset-0 w-full h-full object-contain rounded-2xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p class="text-sm font-medium">Best natural skincare ever!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 4 -->
        <div
          class="testimonial-item flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
          ref="testimonial4"
        >
          <div
            class="testimonial-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-gray-50 to-gray-100 h-80"
          >
            <img
              src="/images/review4.jpg"
              alt="Customer testimonial 4"
              class="absolute inset-0 w-full h-full object-contain rounded-2xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p class="text-sm font-medium">Transformed my skin routine!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 5 -->
        <div
          class="testimonial-item flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
          ref="testimonial5"
        >
          <div
            class="testimonial-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-gray-50 to-gray-100 h-80"
          >
            <img
              src="/images/review5.jpg"
              alt="Customer testimonial 5"
              class="absolute inset-0 w-full h-full object-contain rounded-2xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p class="text-sm font-medium">Pure ingredients, pure results!</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 6 -->
        <div
          class="testimonial-item flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
          ref="testimonial6"
        >
          <div
            class="testimonial-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-gray-50 to-gray-100 h-80"
          >
            <img
              src="/images/review6.jpg"
              alt="Customer testimonial 6"
              class="absolute inset-0 w-full h-full object-contain rounded-2xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p class="text-sm font-medium">Highly recommend to everyone!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16" ref="cta">
        <div
          class="bg-gradient-to-r from-lime-50 to-cyan-50 rounded-3xl p-8 max-w-2xl mx-auto"
        >
          <p class="text-xl text-gray-700 mb-6 font-medium">
            Join thousands of satisfied customers who trust AMAN Blessed
            Naturals
          </p>
        </div>
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
  const testimonialsContainer = ref(null);
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

    // Simple heading fade-in
    tl.fromTo(
      heading.value,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Simple testimonial cards fade-in with stagger
    const testimonialItems = [
      testimonial1.value,
      testimonial2.value,
      testimonial3.value,
      testimonial4.value,
      testimonial5.value,
      testimonial6.value,
    ].filter(Boolean);

    tl.fromTo(
      testimonialItems,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Simple CTA fade-in
    tl.fromTo(
      cta.value,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    return tl;
  };

  onMounted(() => {
    // Set up scroll-triggered animation - ONLY fade in once
    ScrollTrigger.create({
      trigger: testimonialsSection.value,
      start: "top 70%",
      onEnter: () => {
        animateTestimonials();
      },
      once: true,
    });

    // Remove all floating and parallax animations - testimonials stay stable
  });

  // Expose methods to parent
  defineExpose({
    animateTestimonials,
  });
</script>

<style scoped>
  .testimonial-item {
    opacity: 0;
    transform: translateY(40px);
  }

  /* Enhanced hover effects */
  .testimonial-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  /* Smooth transitions for all elements */
  .testimonial-card {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Responsive flex adjustments */
  @media (max-width: 640px) {
    .testimonial-item {
      width: 100% !important;
      max-width: 400px;
    }
  }

  @media (min-width: 641px) and (max-width: 1023px) {
    .testimonial-item {
      width: calc(50% - 12px) !important;
    }
  }

  @media (min-width: 1024px) {
    .testimonial-item {
      width: calc(33.333% - 16px) !important;
    }
  }
</style>
