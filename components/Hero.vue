<template>
  <section id="home" class="pt-16 min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Hero Content -->
        <div class="space-y-8" ref="heroContent">
          <div class="space-y-6">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Welcome to
              <span
                class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
              >
                AMAN Blessed Naturals
              </span>
            </h1>

            <div class="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                This is the right stop for people who are conscious about a
                healthy lifestyle, intentional about making healthy choices for
                themselves and their loved ones.
              </p>

              <p>
                We pride ourselves of products processed with love, without any
                chemical preservatives, ensuring only the purest ingredient
                touch your skin, and enter your body system.
              </p>

              <div
                class="bg-gradient-to-r from-lime-100 to-cyan-100 p-6 rounded-xl border-l-4 border-lime-500"
              >
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  OUR PROMISE!!!
                </h3>
                <p class="text-gray-800">
                  Guarantee of hygienically processed, hundred percent natural
                  products with zero chemical additives, zero cruelty.
                </p>
              </div>

              <div
                class="flex items-center space-x-3 bg-cyan-50 p-4 rounded-lg"
              >
                <div
                  class="w-8 h-8 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="font-semibold text-gray-800">
                  Our oils are NAFDAC Certified.
                </p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <button
                class="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Shop Now
              </button>
              <button
                class="border-2 border-lime-500 text-lime-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-50 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative" ref="heroImage">
          <div class="relative z-10">
            <img
              src="/images/oils.jpg?height=600&width=500"
              alt="Natural cosmetics and lifestyle products"
              class="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <!-- Decorative elements -->
          <div
            class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full opacity-20 animate-pulse"
          ></div>
          <div
            class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full opacity-20 animate-pulse"
            style="animation-delay: 1s"
          ></div>
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
  const heroContent = ref(null);
  const heroImage = ref(null);

  // Expose animation function for parent component
  const animateHero = () => {
    const tl = gsap.timeline();

    // Hero content animation
    tl.fromTo(
      heroContent.value?.children || [],
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );

    // Hero image animation
    tl.fromTo(
      heroImage.value,
      { x: 100, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    return tl;
  };

  onMounted(() => {
    // Scroll-triggered animations
    gsap.fromTo(
      heroImage.value,
      { y: 0 },
      {
        y: -50,
        scrollTrigger: {
          trigger: heroImage.value,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });

  // Expose methods to parent
  defineExpose({
    animateHero,
  });
</script>
