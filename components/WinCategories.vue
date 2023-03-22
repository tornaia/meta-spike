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
        class="text-center pl-3 w-24 h-12"
        :class="{ 'bg-green-200': i !== 2 }"
        type="number"
        min="0"
        max="100"
        :disabled="i === 2"
        v-model.number="config.winCategories[i - 1].chance"
        @change="onWinCategoryChange(i - 1)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Config } from '~/utils/Config'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'WinCategories',
  props: {
    config: { type: Object as PropType<Config>, required: true },
  },
  methods: {
    onWinCategoryChange(i: number): void {
      switch (i) {
        case 0:
          this.config.winCategories[2].chance =
            100 - this.config.winCategories[0].chance
          break
        case 1:
          break
        case 2:
          this.config.winCategories[0].chance =
            100 - this.config.winCategories[2].chance
          break
      }
    },
  },
})
</script>
