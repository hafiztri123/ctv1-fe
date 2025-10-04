<script setup lang="ts">
import { Card, GroupClient} from '@/components/commons';
import imageSrc3 from '@/assets/cg-placeholder-3.svg'
import imageSrc2 from '@/assets/cg-placeholder-2.svg'
import cardPlaceholder from '@/assets/card-placeholder-1.svg'

const data = [
  {
  id: 1,
  name: 'John Doe',
  image: imageSrc3
},
{
  id: 2,
  name: 'John Doe',
  image: imageSrc2
},
{
  id: 3,
  name: 'John Doe',
  image: imageSrc3
},
{
  id: 3,
  name: 'John Doe',
  image: imageSrc3
}
]


</script>

<template>
  <Card :image-src="cardPlaceholder" header="Thought Record" sub-header="Some description" >
    <template #footer>
      <div class="flex justify-between items-center">
        <GroupClient :data="data" field="image"  />

        <span>+ button icon later</span>







      </div>

    </template>
  </Card>
</template>
