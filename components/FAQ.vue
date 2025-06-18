<template>
  <section
    class="py-16 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50"
    ref="faqSection"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Heading -->
      <div class="text-center mb-12" ref="heading">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span
            class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about AMAN Blessed Naturals products
          and services
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4" ref="faqContainer">
        <!-- FAQ Item 1 -->
        <div
          class="faq-item bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          ref="faq1"
        >
          <button
            @click="toggleFAQ(0)"
            class="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-2xl"
            :class="{ 'rounded-b-none': openFAQs[0] }"
          >
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 pr-4">
              Can i ingest/eat your Coconut oil?
            </h3>
            <div
              class="flex-shrink-0 transform transition-transform duration-300"
              :class="{ 'rotate-180': openFAQs[0] }"
            >
              <svg
                class="w-6 h-6 text-lime-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: openFAQs[0] ? faqHeights[0] + 'px' : '0px' }"
          >
            <div class="px-6 pb-6" :ref="(el) => (faqContents[0] = el)">
              <div class="border-t border-amber-200 pt-4">
                <p class="text-gray-700 leading-relaxed">
                  YES. Our Coconut oil is food grade. Processed under absolute
                  hygienic condition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Item 2 -->
        <div
          class="faq-item bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          ref="faq2"
        >
          <button
            @click="toggleFAQ(1)"
            class="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-2xl"
            :class="{ 'rounded-b-none': openFAQs[1] }"
          >
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 pr-4">
              Can i apply your oil on my face?
            </h3>
            <div
              class="flex-shrink-0 transform transition-transform duration-300"
              :class="{ 'rotate-180': openFAQs[1] }"
            >
              <svg
                class="w-6 h-6 text-lime-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: openFAQs[1] ? faqHeights[1] + 'px' : '0px' }"
          >
            <div class="px-6 pb-6" :ref="(el) => (faqContents[1] = el)">
              <div class="border-t border-amber-200 pt-4">
                <p class="text-gray-700 leading-relaxed">
                  Absolutely, yes. A very small amount though. A drop is enough,
                  as all our oils has Coconut oil as their Carrier oil and too
                  much of it can clog your pores. Cleaning your face once a week
                  will take care of this.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Item 3 -->
        <div
          class="faq-item bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          ref="faq3"
        >
          <button
            @click="toggleFAQ(2)"
            class="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-2xl"
            :class="{ 'rounded-b-none': openFAQs[2] }"
          >
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 pr-4">
              Can i apply your oil on My Baby's skin?
            </h3>
            <div
              class="flex-shrink-0 transform transition-transform duration-300"
              :class="{ 'rotate-180': openFAQs[2] }"
            >
              <svg
                class="w-6 h-6 text-lime-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: openFAQs[2] ? faqHeights[2] + 'px' : '0px' }"
          >
            <div class="px-6 pb-6" :ref="(el) => (faqContents[2] = el)">
              <div class="border-t border-amber-200 pt-4">
                <p class="text-gray-700 leading-relaxed">
                  All our oil expect Lemon oil is safe on all skin, even a day
                  old can use them.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Item 4 -->
        <div
          class="faq-item bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          ref="faq4"
        >
          <button
            @click="toggleFAQ(3)"
            class="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-2xl"
            :class="{ 'rounded-b-none': openFAQs[3] }"
          >
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 pr-4">
              Which of your oils can i use for my hair?
            </h3>
            <div
              class="flex-shrink-0 transform transition-transform duration-300"
              :class="{ 'rotate-180': openFAQs[3] }"
            >
              <svg
                class="w-6 h-6 text-lime-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: openFAQs[3] ? faqHeights[3] + 'px' : '0px' }"
          >
            <div class="px-6 pb-6" :ref="(el) => (faqContents[3] = el)">
              <div class="border-t border-amber-200 pt-4">
                <p class="text-gray-700 leading-relaxed">
                  All our oils contains beneficial elements for both skin and
                  hair. choose the one that soothes you. Avocado oil help takes
                  care of edges, coconut oil deeps moisturize and maintain
                  natural black colour of hair
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Item 5 -->
        <div
          class="faq-item bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          ref="faq5"
        >
          <button
            @click="toggleFAQ(4)"
            class="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-2xl"
            :class="{ 'rounded-b-none': openFAQs[4] }"
          >
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 pr-4">
              Is your date powder mixed with sugar?
            </h3>
            <div
              class="flex-shrink-0 transform transition-transform duration-300"
              :class="{ 'rotate-180': openFAQs[4] }"
            >
              <svg
                class="w-6 h-6 text-lime-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: openFAQs[4] ? faqHeights[4] + 'px' : '0px' }"
          >
            <div class="px-6 pb-6" :ref="(el) => (faqContents[4] = el)">
              <div class="border-t border-amber-200 pt-4">
                <p class="text-gray-700 leading-relaxed">
                  No. Our date powder is with 100% dried date fruit. Carefully
                  washed, deseeded, dehydrated and pulverized into fine powder
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Item 6 -->
        <div
          class="faq-item bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          ref="faq6"
        >
          <button
            @click="toggleFAQ(5)"
            class="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-2xl"
            :class="{ 'rounded-b-none': openFAQs[5] }"
          >
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 pr-4">
              Which of your pap powder is best for weening baby?
            </h3>
            <div
              class="flex-shrink-0 transform transition-transform duration-300"
              :class="{ 'rotate-180': openFAQs[5] }"
            >
              <svg
                class="w-6 h-6 text-lime-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: openFAQs[5] ? faqHeights[5] + 'px' : '0px' }"
          >
            <div class="px-6 pb-6" :ref="(el) => (faqContents[5] = el)">
              <div class="border-t border-amber-200 pt-4">
                <p class="text-gray-700 leading-relaxed">
                  All our Pap powders contains natural nutrients essential for
                  baby"s growth and development. They are perfect for old and
                  young. They are whole family cereal, made with love bearing
                  your wellness in mind. some Mother swore by Our Guinea corn
                  pap, some by Our Millet, some mix them all together. however
                  you like it, they are all 100% natural, with zero
                  preservatives, and Zero cruelty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12" ref="cta">
        <div
          class="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-8"
        >
          <p class="text-lg text-gray-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/2347057009327"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <button
              class="bg-gradient-to-r from-lime-500 cursor-pointer to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Support on whatsapp
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, reactive, onMounted, nextTick } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Template refs
  const faqSection = ref(null);
  const heading = ref(null);
  const faqContainer = ref(null);
  const cta = ref(null);

  // Individual FAQ refs
  const faq1 = ref(null);
  const faq2 = ref(null);
  const faq3 = ref(null);
  const faq4 = ref(null);
  const faq5 = ref(null);
  const faq6 = ref(null);

  // FAQ state management
  const openFAQs = reactive([false, false, false, false, false, false]);
  const faqContents = reactive([]);
  const faqHeights = reactive([0, 0, 0, 0, 0, 0]);

  // Toggle FAQ function
  const toggleFAQ = async (index) => {
    openFAQs[index] = !openFAQs[index];

    if (openFAQs[index]) {
      // Wait for DOM update, then calculate height
      await nextTick();
      if (faqContents[index]) {
        faqHeights[index] = faqContents[index].scrollHeight;
      }
    }
  };

  // Calculate initial heights
  const calculateHeights = async () => {
    await nextTick();
    faqContents.forEach((content, index) => {
      if (content) {
        faqHeights[index] = content.scrollHeight;
      }
    });
  };

  // Animate FAQ entrance
  const animateFAQ = () => {
    const tl = gsap.timeline();

    // Animate heading
    tl.fromTo(
      heading.value,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animate FAQ items with stagger
    const faqItems = [
      faq1.value,
      faq2.value,
      faq3.value,
      faq4.value,
      faq5.value,
      faq6.value,
    ].filter(Boolean);

    tl.fromTo(
      faqItems,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate CTA
    tl.fromTo(
      cta.value,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    return tl;
  };

  onMounted(async () => {
    // Calculate heights after component mounts
    await calculateHeights();

    // Set up scroll-triggered animation
    ScrollTrigger.create({
      trigger: faqSection.value,
      start: "top 70%",
      onEnter: () => {
        animateFAQ();
      },
      once: true,
    });
  });

  // Expose methods to parent
  defineExpose({
    animateFAQ,
  });
</script>

<style scoped>
  .faq-item {
    opacity: 0;
    transform: translateY(40px);
  }

  /* Smooth transitions for FAQ items */
  .faq-item button {
    transition: all 0.3s ease;
  }

  .faq-item:hover {
    transform: translateY(-2px);
  }

  /* Custom scrollbar for long answers */
  .faq-content::-webkit-scrollbar {
    width: 4px;
  }

  .faq-content::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }

  .faq-content::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #84cc16, #06b6d4);
    border-radius: 2px;
  }

  .faq-content::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #65a30d, #0891b2);
  }
</style>
