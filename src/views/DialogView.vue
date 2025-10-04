<script setup lang="ts">
import Button from '@/components/commons/Button.vue';
import Dialog from '@/components/commons/Dialog.vue';
import { shallowRef } from 'vue';

const showDialog = shallowRef<boolean>(false)

</script>

<template>
  <div class="flex gap-3">
    <Button @click="showDialog = true"  label="Show dialog"/>
    <Dialog v-model:visible="showDialog" header-icon="checklist" header="Some header" body="Some body">
      <template #button>
        <Button label="Login"/>

      </template>

    </Dialog>

  </div>



</template>
