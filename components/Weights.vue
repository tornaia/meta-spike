<template>
  <div>
    <div
      v-for="i in config.decks.length + 1"
      :key="i"
      :class="{ 'bg-green-200': i > 1 }"
    >
      <div
        v-if="i === 1"
        class="flex flex-col items-center font-bold rotate-180 w-12 h-24"
        style="writing-mode: tb-rl"
      >
        <div class="whitespace-nowrap"># of players</div>
        <div class="whitespace-nowrap text-xs">
          Total: {{ totalNumberOfPlayers }}
        </div>
      </div>
      <input
        v-else
        class="text-center bg-green-200 pl-3 w-12 h-12"
        type="number"
        min="0"
        max="99"
        v-model.number="config.quantities[i - 2]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Config } from '~/utils/Config'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'Weights',
  props: {
    config: { type: Object as PropType<Config>, required: true },
  },
  computed: {
    totalNumberOfPlayers(): number {
      return this.config.quantities
        .filter((c) => !Number.isNaN(c))
        .map((c) => parseInt(`${c}`))
        .reduce((sum, current) => sum + current, 0)
    },
  },
})
</script>
