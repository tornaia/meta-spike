<template>
  <div class="p-1">
    <h2 class="text-xl font-bold">Emojis</h2>
    <div class="flex w-full">
      <div class="flex justify-center font-bold w-24 h-12">Emoji</div>
      <div class="flex justify-center font-bold w-24 h-12">Chance (%)</div>
    </div>
    <div v-for="i in config.winCategories.length" class="flex">
      <div class="flex justify-center w-24 h-12">
        {{ config.winCategories[i - 1].emoji }}
      </div>
      <input
        class="text-center bg-green-200 pl-3 w-24 h-12"
        type="number"
        min="0"
        max="100"
        v-model.number="config.winCategories[i - 1].chance"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Config } from '~/utils/Config'

export default Vue.extend({
  name: 'WinCategories',
  props: {
    config: { type: Object as PropType<Config>, required: true },
  },
})
</script>
