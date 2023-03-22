<template>
  <button
    class="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded w-24"
    @click="addDeck"
  >
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
        stroke="#FFFFFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span>New deck</span>
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
