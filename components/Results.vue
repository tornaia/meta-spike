<template>
  <div>
    <div v-for="i in config.decks.length + 1" :key="i">
      <div
        v-if="i === 1"
        class="flex flex-col items-center font-bold rotate-180 w-12 h-24"
        style="writing-mode: tb-rl"
      >
        <div class="whitespace-nowrap">Odds (%)</div>
        <div class="whitespace-nowrap text-xs">weighted</div>
      </div>
      <div v-else class="flex items-center justify-center w-12 h-12">
        {{ weightedPower(i - 2) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Config } from '~/utils/Config'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'Results',
  props: {
    config: { type: Object as PropType<Config>, required: true },
  },
  computed: {
    weightedPower() {
      return (index: number) => {
        const totalNumberOfPlayers = this.config.quantities.reduce(
          (sum, current) => sum + current,
          0
        )

        const scores = this.config.scores[index]
        let weightedPower = 0
        for (let i = 0; i < this.config.decks.length; i++) {
          let chanceOfWinningInPercentage = -1
          const mirror = scores[i] === null
          if (mirror) {
            chanceOfWinningInPercentage = 50
          } else {
            const score = scores[i]
            const chance: number | undefined = this.config.winCategories.find(
              (wc) => wc.score === score
            )?.chance
            if (chance === undefined) {
              throw Error(`Failed to find chance for score: ${score}`)
            }
            chanceOfWinningInPercentage = chance
          }

          let numberOfPlayers = this.config.quantities[i]

          // nobody plays against himself
          if (index === i && numberOfPlayers > 1) {
            numberOfPlayers -= 1
          }
          // console.log(this.config.decks[index] + ' chance to win against: ' + this.config.decks[i] + ' is ' + chanceOfWinningInPercentage);
          // console.log(this.config.decks[i] + ' is used by ' + numberOfPlayers + ' players');
          weightedPower += chanceOfWinningInPercentage * numberOfPlayers
        }

        const roundedWeightedPower =
          Math.round(
            (weightedPower / totalNumberOfPlayers + Number.EPSILON) * 100
          ) / 100
        // console.log(this.config.decks[index] + '\'s weighted power is ' + roundedWeightedPower);
        return roundedWeightedPower
      }
    },
  },
})
</script>
