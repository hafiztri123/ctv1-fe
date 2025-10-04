<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue';


const props = withDefaults(defineProps<{
  label: string
  disabled?: boolean
  outlined?: boolean
}>(), {
  disabled: false,
  outlined: false
})

const buttonClass = computed<HTMLAttributes['class']>(() => {
  return {
    'px-6 py-2.5 rounded-[10px] flex items-center justify-center select-none group transition-colors' : true,
    'border-0' : !props.outlined,
    'bg-primary cursor-pointer' : !props.disabled  && !props.outlined,
    'bg-disabled cursor-not-allowed' : props.disabled,
    'border border-secondary bg-transparent cursor-pointer hover:bg-outline' : props.outlined
  }
})

const textClass = computed<HTMLAttributes['class']>(() => {
  return {
    'transition-colors': true,
    'text-general font-bold text-[20px]' : !props.outlined,
    'text-secondary text-[14px] group-hover:text-general' : props.outlined && !props.disabled
  }
})



</script>

<template>
  <div :class=buttonClass class="border">
    <span :class="textClass">
      {{ label }}
    </span>
  </div>

</template>
