<script setup lang="ts">
import { Image } from '.'

defineProps<{
  imageSrc: string
  header: string
  subHeader: string
}>()
</script>

<template>
  <div class="flex items-center bg-card rounded-2xl w-full p-3 border-0 gap-2.5">
    <Image :src="imageSrc" />
    <div class="flex-1">
      <div class="flex flex-col gap-[6px]">
        <span class="text-primary text-[16px] font-bold">{{ header }}</span>
        <span class="text-general-light text-[10px]">{{ subHeader }}</span>
      </div>

      <div>
      <slot name="footer"/>
      </div>

    </div>
  </div>
</template>
