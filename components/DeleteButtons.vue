<template>
  <div>
    <div v-for="i in config.decks.length + 1" :key="i">
      <div v-if="i === 1" class="w-2 h-24" />
      <button v-else class="w-2 h-12" @click="removeDeck(i - 2)">🗑️</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Config } from '~/utils/Config'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'DeleteButtons',
  props: {
    config: { type: Object as PropType<Config>, required: true },
  },
  methods: {
    removeDeck(index: number) {
      // decks
      this.config.decks.splice(index, 1)

      // scores
      this.config.scores.splice(index, 1)
      for (let i = 0; i < this.config.scores.length; i++) {
        this.config.scores[i].splice(index, 1)
      }

      // quantities
      this.config.quantities.splice(index, 1)
    },
  },
})
</script>
