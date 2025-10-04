<script setup lang="ts" generic="T extends object">
import { computed, shallowRef, watch } from 'vue';


const props = withDefaults(defineProps<{
  data: T[]
  field: keyof T
  max?: number
}>(), {
  max: 3
})

const srcs = shallowRef<string[]>([])
const displayedSrcs = computed(() => srcs.value.slice(0, props.max))

watch(props.data, () => {
  srcs.value = props.data.map((item) => item[props.field] as string)
}, {
  immediate: true,
  deep: true
})
</script>

<template>
  <div class="flex gap-1.5 items-center justify-center">
    <div class="flex">
      <span
      :key="src"
      v-for="(src, index) in displayedSrcs"
      class="rounded-full w-6 h-6 overflow-hidden relative bg-gray-200"
      :class="{'-ml-2' : index > 0}"
      >
      <img
        :src="src"
      />
    </span>

    </div>


    <span class="text-general-light text-[10px] font-bold">
      {{ srcs.length }} client(s) assigned
    </span>
  </div>
</template>
