<script setup lang="ts">

defineProps<{
  src: string
}>()


</script>

<template>
  <div class="rounded-2xl overflow-hidden bg-gray-200 max-w-[91px] max-h-[116px]">
    <img
      :src="src"
      alt="Card image"
      class="object-cover w-full h-full"
    />
  </div>
</template>
