<template>
  <button
    class="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
    @click="addDeck"
  >
    Add
  </button>
</template>

<script lang="ts">
import { Config } from '~/utils/Config'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'AddButton',
  props: {
    config: { type: Object as PropType<Config>, required: true },
  },
  methods: {
    addDeck() {
      // decks
      this.config.decks.push('New deck')

      // scores
      // 1. update old decks, all win against the new one
      for (let i = 0; i < this.config.scores.length; i++) {
        this.config.scores[i].push(3)
      }

      // 2. create score array for new deck, lose against all other
      const newDecksScore = []
      const newDeckCount = this.config.decks.length
      for (let i = 0; i < newDeckCount - 1; i++) {
        newDecksScore.push(1)
      }
      // 3. mirror
      newDecksScore.push(null)
      this.config.scores.push(newDecksScore)

      // quantities
      this.config.quantities.push(0)
    },
  },
})
</script>
