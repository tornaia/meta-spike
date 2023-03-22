<template>
  <div class="m-4">
    <h1 class="text-3xl font-extrabold">
      Deck selector<small class="ml-2 font-semibold text-gray-500"
        >for spikes</small
      >
    </h1>
    <h2 class="text-xl font-bold">Decks</h2>
    <div class="flex">
      <decks :config="this.$data" />
      <number-of-low-odds-matches :config="this.$data" class="ml-4" />
      <number-of-players :config="this.$data" class="ml-4" />
      <odds-weighted :config="this.$data" class="ml-4" />
      <delete-buttons :config="this.$data" class="ml-4" />
    </div>
    <add-button :config="this.$data" class="mt-1" />
    <odds :config="this.$data" class="mt-8" />
    <copy-link-button :config="this.$data" class="mt-1" />
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
    if (hash.length === 0) {
      this.loadSampleData()
      this.$toast.info('Sample data loaded')
      return
    }

    try {
      const config = <Config>JSON.parse(decode(hash.substring(1)))
      this.$data.decks = config.decks
      this.$data.scores = config.scores
      this.$data.quantities = config.quantities
      this.$data.winCategories = config.winCategories
      this.$toast.success('Data loaded')
    } catch (e) {
      console.warn(`Failed to parse hash: ${hash}, fallback to default`, e)
      this.loadSampleData()
      this.$toast.warning('Failed to load data, fallback to sample')
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
    loadSampleData() {
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
    },
    updateHash() {
      const encodedConfig = encode(JSON.stringify(this.$data))
      window.location.hash = `#${encodedConfig}`
    },
  },
})
</script>
