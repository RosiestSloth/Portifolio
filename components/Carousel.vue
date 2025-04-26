<template>
  <div 
    class="relative w-full h-96 overflow-hidden rounded-lg shadow-lg select-none"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @mousedown="startDrag"
    @touchstart.passive="startDrag"
    @mousemove="handleDrag"
    @touchmove.passive="handleDrag"
    @mouseup="endDrag"
    @touchend.passive="endDrag"
  >
    <!-- Slides Container -->
    <div 
      ref="slider"
      class="flex h-full transition-transform duration-300 ease-out"
      :style="{
        transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }"
    >
      <!-- Slide Items -->
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="w-full h-full flex-shrink-0 relative flex items-center justify-center p-8"
      >
        <!-- Background Image -->
        <div 
          class="absolute inset-0 bg-cover bg-center z-0"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
        
        <!-- Content -->
        <div class="relative z-2 text-white text-center max-w-3xl">
          <h3 class="text-2xl md:text-3xl font-bold mb-4 slide-title">
            {{ slide.title }}
          </h3>
          <p class="text-sm md:text-base slide-text bg-black bg-opacity-60 p-4 rounded-lg">
            {{ slide.text }}
          </p>
        </div>
      </div>
    </div>
    
    <!-- Navigation Arrows -->
    <button 
      @click="goToPrevSlide"
      class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition focus:outline-none"
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="goToNextSlide"
      class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition focus:outline-none"
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    
    <!-- Pagination Dots -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all cursor-pointer duration-150 ease"
        :class="{
          'bg-white w-4': currentIndex === index,
          'bg-white bg-opacity-50': currentIndex !== index
        }"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartCarousel',
  props: {
    slides: Array,
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      currentIndex: 0,
      autoplayTimer: null,
      autoplayTimeout: null,
      isHovering: false,
      isDragging: false,
      startX: 0,
      currentX: 0,
      offsetX: 0,
      sliderWidth: 0
    }
  },
  methods: {
    // Controle de Autoplay
    startAutoplay() {
      this.clearAutoplay()
      if (this.autoplay && !this.isHovering && !this.isDragging) {
        this.autoplayTimer = setInterval(() => {
          this.nextSlide()
        }, this.interval)
      }
    },
    
    pauseAutoplay() {
      this.isHovering = true
      this.clearAutoplay()
    },
    
    resumeAutoplay() {
      this.isHovering = false
      this.startAutoplay()
    },
    
    clearAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer)
        this.autoplayTimer = null
      }
      if (this.autoplayTimeout) {
        clearTimeout(this.autoplayTimeout)
        this.autoplayTimeout = null
      }
    },
    
    // Controle de Slides
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
      this.resetDrag()
    },
        
    goToNextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
      this.resetDrag()
    },
    
    goToPrevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
      this.resetDrag()
    },
    
    goToSlide(index) {
      this.currentIndex = index
      this.resetDrag()
      this.clearAutoplayInterval()
      if (this.autoplay) {
        this.startAutoplay()
      }
    },
    
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
      this.resetDrag()
    },
    
    // Controle de Arrasto
    startDrag(e) {
      this.isDragging = true
      this.startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
      this.currentX = this.startX
      this.pauseAutoplay()
    },
    
    handleDrag(e) {
      if (!this.isDragging) return
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
      this.offsetX = clientX - this.currentX
      this.currentX = clientX
    },

    endDrag() {
      if (!this.isDragging) return
      this.isDragging = false
      
      const dragDistance = this.currentX - this.startX
      const threshold = this.sliderWidth * 0.15
      
      if (dragDistance > threshold) {
        this.prevSlide()
      } else if (dragDistance < -threshold) {
        this.nextSlide()
      }
      
      this.resetDrag()
      this.resumeAutoplay()
    },
    
    resetDrag() {
      this.offsetX = 0
      this.startX = 0
      this.currentX = 0
    },
    
    calculateSliderWidth() {
      if (this.$refs.slider) {
        this.sliderWidth = this.$refs.slider.offsetWidth
      }
    }
  },
  mounted() {
    this.calculateSliderWidth()
    window.addEventListener('resize', this.calculateSliderWidth)
    this.startAutoplay()
  },
  beforeUnmount() {
    this.clearAutoplay()
    window.removeEventListener('resize', this.calculateSliderWidth)
  }
}
</script>