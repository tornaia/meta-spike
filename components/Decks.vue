<template>
  <div>
    <div v-for="i in config.decks.length + 1" :key="i" class="flex">
      <div v-for="j in config.decks.length + 1" :key="j">
        <div
          v-if="i === j"
          class="bg-black"
          :class="{ 'w-24 h-24': i === 1, 'w-12 h-12': i > 1 }"
        ></div>
        <div
          v-else-if="i === 1 && j > 1"
          class="flex items-center font-bold rotate-180 p-1 w-12 h-24"
          style="writing-mode: tb-rl"
        >
          {{ config.decks[j - 2] }}
        </div>

        <div v-else-if="j === 1 && i > 1" class="flex w-24 h-12">
          <input
            v-model="config.decks[i - 2]"
            class="font-bold p-1 bg-green-200 w-24 h-12"
          />
        </div>

        <select
          v-else
          class="pl-1 w-12 h-12 disabled:appearance-none disabled:pl-3"
          :class="{ 'bg-green-200': i < j, 'bg-gray-200': i >= j }"
          :disabled="i > j"
          v-model.number="config.scores[i - 2][j - 2]"
          @change="onScoreChange(i - 2, j - 2)"
        >
          <option :value="1">🤯</option>
          <option :value="2">😐</option>
          <option :value="3">😎</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Config } from '~/utils/Config'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'Decks',
  props: {
    config: { type: Object as PropType<Config>, required: true },
  },
  methods: {
    onScoreChange(i: number, j: number): void {
      const newThisScore = this.config.scores[i][j]
      let newOtherScore: number
      switch (newThisScore) {
        case 1:
          newOtherScore = 3
          break
        case 2:
          newOtherScore = 2
          break
        case 3:
          newOtherScore = 1
          break
        default:
          throw Error(`Must not happen, unsupported score: ${newThisScore}`)
      }
      this.config.scores[j][i] = newOtherScore
    },
  },
})
</script>
