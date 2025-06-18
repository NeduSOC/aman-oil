<template>
  <section
    class="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-green-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16" ref="contactHeader">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          <span
            class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are always ready to listen, always ready to tend to your needs
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div
          class="bg-white rounded-3xl shadow-xl p-8 md:p-10"
          ref="contactForm"
        >
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- First Name and Last Name Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Email"
              />
            </div>

            <!-- Subject -->
            <div>
              <label
                for="subject"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Subject"
              />
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                placeholder="Message"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span v-if="!isSubmitting">Submit</span>
                <span v-else class="flex items-center justify-center">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              </button>
            </div>

            <!-- Success Message -->
            <div
              v-if="showSuccess"
              class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl"
            >
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Thank you! Your message has been sent successfully. We'll get
                back to you soon.
              </div>
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8" ref="contactInfo">
          <!-- Connect With Us -->
          <div
            class="bg-gradient-to-r from-lime-50 to-cyan-50 rounded-3xl shadow-xl p-8 md:p-10"
          >
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              <span
                class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
              >
                Connect With Us
              </span>
            </h2>

            <!-- Address -->
            <div class="mb-8" ref="addressInfo">
              <div class="flex items-start mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p class="text-gray-700 leading-relaxed">
                    AMAN Blessed Naturals Limited<br />
                    10 Muamin Oladipo Avenue, off youth road,<br />
                    Amagba Benin city, Edo state Nigeria,<br />
                    West Africa
                  </p>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="mb-8" ref="phoneInfo">
              <div class="flex items-center mb-4">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Call Us
                  </h3>
                  <a
                    href="tel:+2347057009327"
                    class="text-lime-600 hover:text-lime-700 font-medium text-lg transition-colors duration-200"
                  >
                    +234 7057009327
                  </a>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="mb-8" ref="emailInfo">
              <div class="flex items-center mb-4">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:dymuamin@yahoo.co.uk"
                    class="text-lime-600 hover:text-lime-700 font-medium text-lg transition-colors duration-200"
                  >
                    dymuamin@yahoo.co.uk
                  </a>
                </div>
              </div>
            </div>

            <!-- Follow Us -->
            <div ref="socialInfo">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div class="flex space-x-4">
                <!-- Facebook -->
                <a
                  href="https://www.facebook.com/amanoils"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </a>

                <!-- Instagram -->
                <a
                  href="https://www.instagram.com/amanoils?igsh=MWNidGR3NWxlbW5naA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </a>

                <!-- WhatsApp -->
                <a
                  href="https://wa.me/2347057009327"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                    />
                  </svg>
                </a>

                <!-- X (Twitter) -->
                <a
                  href="https://amanblessednaturals.com.ng/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Follow us on X"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div
            class="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            ref="businessHours"
          >
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              <span
                class="bg-gradient-to-r from-lime-500 to-cyan-500 bg-clip-text text-transparent"
              >
                Business Hours
              </span>
            </h2>
            <div class="space-y-3">
              <div
                class="flex justify-between items-center py-2 border-b border-gray-100"
              >
                <span class="text-gray-700 font-medium">Monday - Friday</span>
                <span class="text-gray-900 font-semibold"
                  >9:00 AM - 6:00 PM</span
                >
              </div>
              <div
                class="flex justify-between items-center py-2 border-b border-gray-100"
              >
                <span class="text-gray-700 font-medium">Saturday</span>
                <span class="text-gray-900 font-semibold"
                  >10:00 AM - 4:00 PM</span
                >
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-gray-700 font-medium">Sunday</span>
                <span class="text-red-600 font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, reactive, onMounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useSeoMeta } from "#app";

  // Register GSAP plugins
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Component refs
  const contactHeader = ref(null);
  const contactForm = ref(null);
  const contactInfo = ref(null);
  const addressInfo = ref(null);
  const phoneInfo = ref(null);
  const emailInfo = ref(null);
  const socialInfo = ref(null);
  const businessHours = ref(null);

  // Form state
  const form = reactive({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const isSubmitting = ref(false);
  const showSuccess = ref(false);

  // SEO Meta
  useSeoMeta({
    title: "Contact Us - AMAN Blessed Naturals | Get In Touch",
    description:
      "Contact AMAN Blessed Naturals for natural products inquiries. Located in Benin City, Edo State. Call +234 7057009327 or email dymuamin@yahoo.co.uk",
    keywords:
      "contact AMAN Blessed Naturals, Benin City natural products, Edo State skincare, natural products Nigeria, contact form",
    ogTitle: "Contact AMAN Blessed Naturals - We're Here to Help",
    ogDescription:
      "Get in touch with us for all your natural product needs. We're always ready to listen and tend to your needs.",
    ogType: "website",
  });

  // Form submission
  const submitForm = async () => {
    isSubmitting.value = true;

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message
      showSuccess.value = true;

      // Reset form
      Object.keys(form).forEach((key) => {
        form[key] = "";
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        showSuccess.value = false;
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      isSubmitting.value = false;
    }
  };

  // Animations
  onMounted(() => {
    // Header animation
    gsap.fromTo(
      contactHeader.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    // Form animation
    gsap.fromTo(
      contactForm.value,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    // Contact info animation
    gsap.fromTo(
      contactInfo.value,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Staggered info sections
    if (typeof window !== "undefined") {
      const infoSections = [
        addressInfo.value,
        phoneInfo.value,
        emailInfo.value,
        socialInfo.value,
      ];
      gsap.fromTo(
        infoSections,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.8,
        }
      );

      // Business hours animation
      ScrollTrigger.create({
        trigger: businessHours.value,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            businessHours.value,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
          );
        },
        once: true,
      });
    }
  });
</script>

<style scoped>
  /* Form styling enhancements */
  input:focus,
  textarea:focus {
    box-shadow: 0 0 0 3px rgba(132, 204, 22, 0.1);
  }

  /* Social media hover effects */
  .social-link {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .social-link:hover {
    transform: translateY(-2px) scale(1.1);
  }

  /* Success message animation */
  .success-enter-active,
  .success-leave-active {
    transition: all 0.5s ease;
  }

  .success-enter-from,
  .success-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  /* Custom scrollbar for textarea */
  textarea::-webkit-scrollbar {
    width: 6px;
  }

  textarea::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  textarea::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #84cc16, #06b6d4);
    border-radius: 3px;
  }

  textarea::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #65a30d, #0891b2);
  }

  /* Loading spinner animation */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }
</style>
