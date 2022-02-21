<script>
import HistoryEventType from '../../types/HistoryEventType'

export default {
  name: 'History',

  computed: {
    items() {
      switch (this.$route.name) {
        case 'history_all':
          return this.$store.getters.history
        case 'history_add':
          return this.filterHistoryByOperation(HistoryEventType.addElement)
        case 'history_delete':
          return this.filterHistoryByOperation(HistoryEventType.deleteElement)
      }
      return []
    },
  },

  methods: {
    filterHistoryByOperation(operation) {
      return this.$store.getters.history.filter((v) => v.operation === operation)
    },
  },
}
</script>

<template>
  <div class="history">
    <h2>История</h2>
    <router-view :items="items"></router-view>
  </div>
</template>

<style scoped>
.history {
  display: block;
}
</style>
