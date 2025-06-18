<template>
  <section
    class="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-green-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16" ref="aboutHeader">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          About
          <span
            class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
          >
            AMAN Blessed Naturals
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our journey of natural living, scientific expertise, and
          commitment to your well-being
        </p>
      </div>

      <!-- Our Story Section -->
      <div class="mb-20" ref="storySection">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div class="p-8 md:p-12">
            <div class="flex items-center mb-8">
              <div
                class="w-12 h-12 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full flex items-center justify-center mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
            </div>

            <div
              class="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
            >
              <p>
                At AMAN BLESSED NATURALS, our journey begins with a deep-rooted
                passion for natural living and a commitment to harnessing the
                goodness of nature for wholesome products. Founded by
                <strong>Oladipo, Aminat Adedoyin</strong>, whose academic
                journey led her from aspiring medicine to the enlightening path
                of Biochemistry, AMAN BLESSED NATURALS embodies a profound
                understanding of nutrition and biochemistry.
              </p>

              <p>
                With a BSc in Biochemistry and an MSc in Nutritional
                Biochemistry, <strong>Mrs. Oladipo</strong> realized early on
                the transformative power of natural ingredients. Her expertise
                highlighted the importance of consuming unprocessed foods and
                steering clear of chemical-laden skincare and haircare products.
                This realization became the cornerstone of our brand philosophy
                — to advocate for a lifestyle that embraces natural remedies and
                nourishment.
              </p>

              <div
                class="bg-gradient-to-r from-lime-100 to-cyan-100 p-6 rounded-xl border-l-4 border-lime-500 my-8"
              >
                <p class="text-gray-800 italic text-lg">
                  "We believe that by eating right, using chemical-free skincare
                  and haircare, and maintaining an active lifestyle, we can
                  enhance our well-being and reduce our reliance on conventional
                  medicine," says <strong>Mrs. Oladipo</strong>. Her scientific
                  background underscores the dangers of synthetic additives and
                  motivates us to create products that are purely natural.
                </p>
              </div>

              <p>
                AMAN BLESSED NATURALS stands apart by meticulously crafting each
                product with 100% natural ingredients, without preservatives or
                harmful chemicals. Our process involves gentle preservation
                methods, carefully removing moisture using precise temperatures,
                ensuring that the integrity and potency of our ingredients
                remain intact.
              </p>
            </div>

            <!-- Story Image -->
            <!-- <div class="mt-10" ref="storyImage">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Mrs. Oladipo Aminat Adedoyin - Founder of AMAN Blessed Naturals"
                  class="w-full h-80 object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <p class="text-sm font-medium">
                    Mrs. Oladipo, Aminat Adedoyin - Founder and CEO
                  </p>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Our Vision Section -->
      <div class="mb-20" ref="visionSection">
        <div
          class="bg-gradient-to-r from-lime-50 to-cyan-50 rounded-3xl shadow-xl overflow-hidden"
        >
          <div class="p-8 md:p-12">
            <div class="flex items-center mb-8">
              <div
                class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-full flex items-center justify-center mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Our Vision
              </h2>
            </div>

            <div
              class="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            >
              <p>
                At AMAN Blessed Naturals Limited, our vision is to transform the
                way people perceive and consume food and personal care products.
                We strive to lead the market in providing pure, natural
                alternatives that promote health and wellness. By prioritizing
                sustainability and the use of farm-fresh produce, we aim to
                inspire a movement towards a healthier, more natural lifestyle.
                Our goal is to become a trusted name in every household, known
                for our commitment to quality, integrity, and the well-being of
                our customers and the environment.
              </p>
            </div>

            <!-- Vision Image -->
            <div class="mt-10" ref="visionImage">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <!-- <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Natural products and sustainable farming representing our vision"
                  class="w-full h-80 object-cover"
                /> -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <p class="text-sm font-medium">
                    Leading the natural lifestyle movement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Mission Section -->
      <div class="mb-20" ref="missionSection">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div class="p-8 md:p-12">
            <div class="flex items-center mb-8">
              <div
                class="w-12 h-12 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full flex items-center justify-center mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
            </div>

            <div
              class="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            >
              <div
                class="bg-gradient-to-r from-cyan-100 to-lime-100 p-6 rounded-xl border-l-4 border-cyan-500 mb-6"
              >
                <p class="text-gray-800 italic text-lg">
                  "Our mission is to contribute to a healthier world by
                  promoting the use of natural products," affirms
                  <strong>Mrs. Oladipo, Aminat</strong>.
                </p>
              </div>

              <p>
                This commitment drives us to innovate continuously, offering a
                range of natural food products and skincare oils that are not
                only effective but also safe for our bodies and the environment.
                We are dedicated to creating products that nurture both personal
                wellness and environmental sustainability, ensuring that every
                item we produce meets the highest standards of purity and
                quality.
              </p>
            </div>

            <!-- Mission Image -->
            <div class="mt-10" ref="missionImage">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <!-- <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Natural skincare oils and food products showcasing our mission"
                  class="w-full h-80 object-cover"
                /> -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <p class="text-sm font-medium">
                    Contributing to a healthier world through natural products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-20" ref="valuesSection">
        <div
          class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          >
            <span
              class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
            >
              Our Core Values
            </span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center" ref="value1">
              <div
                class="w-16 h-16 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">100% Natural</h3>
              <p class="text-gray-600">
                Pure ingredients without any chemical additives or preservatives
              </p>
            </div>

            <div class="text-center" ref="value2">
              <div
                class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                NAFDAC Certified
              </h3>
              <p class="text-gray-600">
                All our oils meet the highest quality and safety standards
              </p>
            </div>

            <div class="text-center" ref="value3">
              <div
                class="w-16 h-16 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Zero Cruelty</h3>
              <p class="text-gray-600">
                Ethically produced with love and care for all living beings
              </p>
            </div>

            <div class="text-center" ref="value4">
              <div
                class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Sustainable</h3>
              <p class="text-gray-600">
                Environmentally conscious practices for a better tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center" ref="ctaSection">
        <div
          class="bg-gradient-to-r from-lime-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Natural Wellness?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who have embraced the natural
            lifestyle with AMAN Blessed Naturals
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/shop"
              class="bg-white text-lime-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              Shop Now
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-lime-600 transition-all duration-200"
            >
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted, inject } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useSeoMeta } from "#app";

  // Register GSAP plugins
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Component refs
  const aboutHeader = ref(null);
  const storySection = ref(null);
  const storyImage = ref(null);
  const visionSection = ref(null);
  const visionImage = ref(null);
  const missionSection = ref(null);
  const missionImage = ref(null);
  const valuesSection = ref(null);
  const value1 = ref(null);
  const value2 = ref(null);
  const value3 = ref(null);
  const value4 = ref(null);
  const ctaSection = ref(null);

  // Inject the layout timeline
  const layoutTimeline = inject("layoutTimeline");

  // SEO Meta
  useSeoMeta({
    title: "About Us - AMAN Blessed Naturals | Our Story, Vision & Mission",
    description:
      "Learn about AMAN Blessed Naturals journey, founded by Mrs. Oladipo Aminat Adedoyin. Discover our commitment to 100% natural products, NAFDAC certified oils, and chemical-free wellness solutions.",
    keywords:
      "AMAN Blessed Naturals story, Mrs. Oladipo Aminat Adedoyin, natural products founder, biochemistry expertise, NAFDAC certified, chemical-free skincare",
    ogTitle: "About AMAN Blessed Naturals - Our Natural Wellness Journey",
    ogDescription:
      "Founded by a Biochemistry expert, we create 100% natural products without preservatives or harmful chemicals. Discover our story of natural living and wellness.",
    ogType: "website",
  });

  // Animation functions
  const animateSection = (element, delay = 0) => {
    return gsap.fromTo(
      element,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay }
    );
  };

  const animateValues = () => {
    const values = [
      value1.value,
      value2.value,
      value3.value,
      value4.value,
    ].filter(Boolean);
    return gsap.fromTo(
      values,
      { y: 40, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      }
    );
  };

  onMounted(() => {
    // Header animation
    gsap.fromTo(
      aboutHeader.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    // Scroll-triggered animations for each section
    if (typeof window !== "undefined") {
      ScrollTrigger.create({
        trigger: storySection.value,
        start: "top 70%",
        onEnter: () => {
          animateSection(storySection.value);
          gsap.fromTo(
            storyImage.value,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: visionSection.value,
        start: "top 70%",
        onEnter: () => {
          animateSection(visionSection.value);
          gsap.fromTo(
            visionImage.value,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: missionSection.value,
        start: "top 70%",
        onEnter: () => {
          animateSection(missionSection.value);
          gsap.fromTo(
            missionImage.value,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: valuesSection.value,
        start: "top 70%",
        onEnter: () => {
          animateSection(valuesSection.value);
          setTimeout(() => animateValues(), 300);
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: ctaSection.value,
        start: "top 80%",
        onEnter: () => {
          animateSection(ctaSection.value);
        },
        once: true,
      });
    }
  });
</script>

<style scoped>
  /* Enhanced prose styles */
  .prose p {
    margin-bottom: 1.5rem;
  }

  .prose strong {
    color: #374151;
    font-weight: 600;
  }

  /* Smooth hover effects */
  .hover-lift {
    transition: transform 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-5px);
  }

  /* Image overlay effects */
  .relative img {
    transition: transform 0.5s ease;
  }

  .relative:hover img {
    transform: scale(1.05);
  }

  /* Custom gradient text */
  .gradient-text {
    background: linear-gradient(135deg, #84cc16, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
