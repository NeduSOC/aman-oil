<template>
  <footer class="bg-black text-white py-8" ref="footer">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div
        class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6"
      >
        <!-- Message Input Section -->
        <div class="flex-1 max-w-md">
          <div class="relative flex items-center">
            <input
              type="text"
              v-model="message"
              placeholder="Send us a message"
              class="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-3 pr-12 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200"
              @keyup.enter="sendMessage"
            />
            <button
              @click="sendMessage"
              class="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-lime-500 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="flex items-center justify-center lg:justify-end gap-4">
          <a
            href="https://www.facebook.com/amanoils"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-lime-500 hover:to-cyan-500 transition-all duration-200 transform hover:scale-110"
            aria-label="Follow us on Facebook"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/amanoils?igsh=MWNidGR3NWxlbW5naA=="
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-lime-500 hover:to-cyan-500 transition-all duration-200 transform hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 
                114.9-114.9-51.3-114.9-114.9-114.9zm0 186.6c-39.6 0-71.8-32.2-71.8-71.8s32.2-71.8 
                71.8-71.8 71.8 32.2 71.8 71.8-32.2 71.8-71.8 71.8zm146.4-194.3c0 14.9-12 
                26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 
                27.2c-1.7-35.7-9.9-67.3-36.2-93.5s-57.8-34.5-93.5-36.2C293.7 
                0 178.3 0 129.1 1.7 93.4 3.4 61.8 11.6 35.6 37.8S1.1 93.4 
                0 129.1C-1.7 178.3-1.7 293.7 0 342.9c1.7 35.7 9.9 67.3 
                36.2 93.5s57.8 34.5 93.5 36.2C178.3 512 293.7 512 342.9 
                510.3c35.7-1.7 67.3-9.9 93.5-36.2s34.5-57.8 36.2-93.5C512 
                293.7 512 178.3 510.3 129.1zm-48.5 242c-7.8 19.5-22.9 34.6-42.4 
                42.4-29.4 11.7-99.2 9-132.5 9s-103.1 2.6-132.5-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.5s-2.6-103.1 
                9-132.5c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 
                132.5-9s103.1-2.6 132.5 9c19.5 7.8 34.6 22.9 42.4 42.4 
                11.7 29.4 9 99.2 9 132.5s2.6 103.1-9 132.5z"
              />
            </svg>
          </a>

          <a
            href="https://amanblessednaturals.com.ng/about/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-lime-500 hover:to-cyan-500 transition-all duration-200 transform hover:scale-110"
            aria-label="Follow us on X (Twitter)"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/2347057009327"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-lime-500 hover:to-cyan-500 transition-all duration-200 transform hover:scale-110"
            aria-label="Contact us on WhatsApp"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 pt-6">
        <p class="text-center text-gray-400 text-sm">
          Copyright © AMAN BLESSED NATURALS LIMITED 2024
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { ref } from "vue";
  import { gsap } from "gsap";

  // Reactive data
  const message = ref("");
  const footer = ref(null);

  // Methods
  const sendMessage = () => {
    if (message.value.trim()) {
      // Here you would typically send the message to your backend
      console.log("Message sent:", message.value);

      // Show a simple feedback animation
      gsap.to(footer.value, {
        scale: 1.02,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });

      // Clear the message
      message.value = "";

      // You could also show a toast notification here
      alert("Message sent! We'll get back to you soon.");
    }
  };

  // Expose animation function for parent component
  const animateFooter = () => {
    return gsap.fromTo(
      footer.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  };

  // Expose methods to parent
  defineExpose({
    animateFooter,
  });
</script>
