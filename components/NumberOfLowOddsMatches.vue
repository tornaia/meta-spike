<template>
  <div>
    <div v-for="i in config.scores.length + 1" :key="i">
      <div
        v-if="i === 1"
        class="flex flex-col items-center justify-center font-bold rotate-180 w-12 h-24"
        style="writing-mode: tb-rl"
      >
        <div class="whitespace-nowrap">
          # of
          <span class="rotate-90" style="writing-mode: horizontal-tb">🤯</span>
        </div>
      </div>
      <div v-else class="flex items-center justify-center w-12 h-12">
        {{ numberOfLowOddsMatches(i - 2) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Config } from '~/utils/Config'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'NumberOfLowOddsMatches',
  props: {
    config: { type: Object as PropType<Config>, required: true },
  },
  computed: {
    numberOfLowOddsMatches() {
      return (index: number) =>
        this.config.scores[index].filter((s) => s === 1).length
    },
  },
})
</script>
