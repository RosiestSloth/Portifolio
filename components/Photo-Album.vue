<template>
  <div>
    <PhotoAlbum 
      :photos="photos"
      layout="columns"
      @click="({ index }) => showLightbox(index)"
    />

    <vue-easy-lightbox
      :visible="visible"
      :imgs="lightboxImages"
      :index="index"
      @hide="handleHide"
      :moveDisabled="true"
      :escDisabled="true"
      :maskClosable="true"
    />
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { PhotoAlbum } from 'vue-photo-album'
  import VueEasyLightbox from 'vue-easy-lightbox'
  import imagesData from '../public/data/images-data.json'

  const photos = ref([])
  const visible = ref(false)
  const index = ref(0)

  const lightboxImages = computed(() => {
    return photos.value.map(photo => ({
      src: photo.src,
      title: photo.title
    }))
  })

  onMounted(() => {
    // Transformar o formato do JSON para o formato esperado
    photos.value = imagesData.images.map(img => ({
      src: img.path,
      alt: img.title,
      title: img.title,
      width: img.width,
      height: img.height
    }))
  })

  const showLightbox = (idx) => {
    index.value = idx
    visible.value = true
  }

  const handleHide = () => {
    visible.value = false
  }
</script>
