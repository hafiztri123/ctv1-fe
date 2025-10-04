<script setup lang="ts">
import { Button, Dialog } from '@/components/commons';
import { shallowRef } from 'vue';

const showDialog = shallowRef<boolean>(false)
const showDialogWithoutButton = shallowRef<boolean>(false)

</script>

<template>
  <div class="flex flex-col gap-3">
    <Button @click="showDialog = true"  label="Show dialog"/>
    <Button @click="showDialogWithoutButton = true" label="Show dialog without button"/>

    <Dialog v-model:visible="showDialog" header-icon="checklist" header="Some header" body="Some body" close-on-backdrop>
      <template #button>
        <Button label="Login"/>
      </template>
    </Dialog>
    <Dialog v-model:visible="showDialogWithoutButton" header-icon="checklist" header="Some header" body="Some body" close-on-backdrop/>
  </div>
</template>
