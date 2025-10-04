<script setup lang="ts">
import { watch } from 'vue';

defineProps<{
  headerIcon: string
  header: string
  body: string
}>()

const visible = defineModel<boolean>('visible', {
  default: false
})

watch(visible, (isVisible) => {
  const handleEscape = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      visible.value = false
    }
  }

  if (isVisible) {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  }

  return () => {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  }

})

</script>

<template>
  <Teleport to="body">
      <div
        v-if="visible"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >

      <div class="absolute inset-0 backdrop-brightness-75"/>

      <div class="relative z-10 rounded-[24px] p-6 bg-white ring-0 border-0 w-[calc(100vw-26px)]">
        <div class="flex flex-col items-center justify-center">
          <span>{{ headerIcon }}</span>

        <div class="flex flex-col gap-2 items-center justify-center mb-[27px] mt-3">
          <span class="text-[20px] font-bold text-primary">{{ header }}</span>
          <span class="text-[10px] font-bold text-secondary">{{ body }}</span>
        </div>

        <slot name="button"></slot>
        </div>

      </div>


      </div>
  </Teleport>

</template>
