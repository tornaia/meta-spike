<template>
  <div class="m-4">
    <h1 class="text-3xl font-extrabold">
      Deck selector<small class="ml-2 font-semibold text-gray-500"
        >for spikes</small
      >
    </h1>
    <h2 class="text-xl font-bold">Decks</h2>
    <div class="flex">
      <matrix :config="this.$data" />
      <weights :config="this.$data" class="ml-8" />
      <results :config="this.$data" class="ml-8" />
      <delete-buttons :config="this.$data" class="ml-8" />
    </div>
    <add-button :config="this.$data" class="mt-1" />
    <win-categories :config="this.$data" class="mt-10" />
  </div>
</template>

<script lang="ts">
import { Config, WinCategory } from '~/utils/Config'
import { encode, decode } from 'js-base64'
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  mounted() {
    const hash = this.$route.hash.toString()
    const decodedConfig = hash.startsWith('#') ? hash.substring(1) : undefined

    if (decodedConfig) {
      try {
        const config = <Config>JSON.parse(decode(decodedConfig))
        this.$data.decks = config.decks
        this.$data.scores = config.scores
        this.$data.quantities = config.quantities
        this.$data.winCategories = config.winCategories
      } catch (e) {
        console.warn(`Failed to parse hash: ${hash}, fallback to default`, e)
        this.$data.decks = ['Sellő', 'Vámpír', 'Tier', 'Szerzetes', 'Olwianar']
        this.$data.scores = [
          [null, 3, 3, 2, 1],
          [1, null, 3, 2, 3],
          [1, 1, null, 1, 1],
          [2, 2, 3, null, 3],
          [3, 1, 3, 1, null],
        ]
        this.$data.quantities = [1, 2, 2, 1, 1]
        this.$data.winCategories = [
          new WinCategory(1, 20, '🤯'),
          new WinCategory(2, 50, '😐'),
          new WinCategory(3, 80, '😎'),
        ]
        return
      }
    }
  },
  data(): Config {
    return {
      decks: [],
      scores: [],
      quantities: [],
      winCategories: [],
    }
  },
  watch: {
    decks: {
      deep: true,
      handler() {
        this.updateHash()
      },
    },
    scores: {
      deep: true,
      handler() {
        this.updateHash()
      },
    },
    quantities: {
      deep: true,
      handler() {
        this.updateHash()
      },
    },
    winCategories: {
      deep: true,
      handler() {
        this.updateHash()
      },
    },
  },
  methods: {
    updateHash() {
      const encodedConfig = encode(JSON.stringify(this.$data))
      window.location.hash = `#${encodedConfig}`
    },
  },
})
</script>
