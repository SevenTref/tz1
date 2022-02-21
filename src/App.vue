<script>
import PageHeader from './components/PageHeader.vue'
import axios from 'axios'

export default {
  components: { PageHeader },

  data() {
    return {
      isError: false,
      errorMessage: null,
    }
  },

  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => this.setResponseData(response))
      .catch((error) => this.setError(error))
  },

  computed: {
    isLoaderVisible() {
      return !this.isError && !this.$store.getters.isDataLoaded
    },

    isDataVisible() {
      return !this.isError && this.$store.getters.isDataLoaded
    },
  },

  methods: {
    setResponseData(response) {
      if (Array.isArray(response?.data)) {
        this.$store.commit('setData', response.data)
        return
      }

      this.setError()
    },

    setError(error) {
      this.errorMessage = error?.getMessage
        ? error.getMessage()
        : 'Произошла ошибка загрузки данных'
      this.isError = true
    },
  },
}
</script>

<template>
  <div id="app">
    <PageHeader></PageHeader>
    <div class="main__loader" v-if="isLoaderVisible">Загрузка ...</div>
    <div class="main__error" v-if="isError">{{ errorMessage }}</div>
    <main v-if="isDataVisible">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
