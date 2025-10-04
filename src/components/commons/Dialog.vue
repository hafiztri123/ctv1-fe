<script setup lang="ts">
import { onUnmounted, useSlots, watch } from 'vue'

const props = defineProps<{
  headerIcon: string
  header: string
  body: string
  closeOnBackdrop?: boolean
}>()

const visible = defineModel<boolean>('visible', {
  default: false,
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})

const slots = useSlots()

const handleEscape = (e: KeyboardEvent): void => {
  if (e.key === 'Escape' && visible.value) {
    visible.value = false
  }
}

const handleBackdropClick = (): void => {
  if (props.closeOnBackdrop) {
    visible.value = false
  }
}

watch(visible, (isVisible) => {
  if (isVisible) {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/40" @click="handleBackdropClick" />

        <div
          class="relative z-10 rounded-[24px] p-9 bg-white ring-0 border-0 w-[calc(100vw-26px)]"
          @click.stop
        >
          <div class="flex flex-col items-center justify-center">
            <span>{{ headerIcon }}</span>

            <div class="flex flex-col gap-2 items-center justify-center mt-3" :class="{
              'mb-[27px]' : slots.button
            }">
              <span class="text-[20px] font-bold text-primary">{{ header }}</span>
              <span class="text-[10px] font-bold text-secondary">{{ body }}</span>
            </div>

            <slot name="button"></slot>
          </div>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.15s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
  opacity: 0;
}
</style>
