<script>
import HistoryEventType from '../types/HistoryEventType'
export default {
  name: 'HistoryList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  methods: {
    leadZero(value) {
      return value < 10 ? '0' + value : value.toString()
    },

    formatDate(date) {
      return (
        [
          this.leadZero(date.getDate()),
          this.leadZero(date.getMonth() + 1),
          date.getFullYear(),
        ].join('.') +
        ' ' +
        [
          this.leadZero(date.getHours()),
          this.leadZero(date.getMinutes()),
          this.leadZero(date.getSeconds()),
        ].join(':')
      )
    },

    getElementById(elementId) {
      return this.$store.getters.elementsById[elementId] || {}
    },

    getOperationName(historyItem) {
      switch (historyItem.operation) {
        case HistoryEventType.addElement:
          return 'Добавлено'
        case HistoryEventType.deleteElement:
          return 'Удалено'
      }

      return '???'
    },
  },
}
</script>

<template>
  <div class="history__history-list">
    <table class="history__history-table">
      <tbody>
        <tr class="history__element" v-for="(historyItem, i) in items" :key="i">
          <td class="history__element-cell">
            {{ getOperationName(historyItem) }}
          </td>
          <td class="history__element-cell">
            {{ formatDate(historyItem.date) }}
          </td>
          <td class="history__element-cell">
            {{ getElementById(historyItem.elementId).name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.history__history-list {
  display: block;
  margin: 5px;
  border: 1px solid var(--color-border);
  min-width: 400px;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.history__history-table {
  padding: 0px;
  margin: 0px;
  border: none;
}

.history__element-cell {
  padding: 3px 10px;
  border: none;
  white-space: nowrap;
}
</style>
