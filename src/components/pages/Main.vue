<script>
import ElementsList from '../ElementsList.vue'
import ElementsFilter from '../ElementsFilter.vue'
export default {
  name: 'Main',
  components: { ElementsList, ElementsFilter },
  data() {
    return {
      filterValue: '',
    }
  },

  computed: {
    selectedIds() {
      return this.$store.getters.selectedIdsAsObject
    },

    notSelectedItems() {
      if (!this.$store.getters.selectedIdsAsArray.length) {
        return this.$store.getters.elements
      }

      return this.$store.getters.elements.filter((elm) => !this.selectedIds[elm?.id])
    },

    selectedItems() {
      return this.$store.getters.elements.filter((elm) => this.selectedIds[elm?.id])
    },

    filteredItems() {
      if (!this.filterValue) {
        return this.notSelectedItems
      }

      const matches = {}
      const notSelectedItems = {}
      this.notSelectedItems.forEach((item) => {
        const startCount = this.getSubstringCount(this.filterValue, item.name)
        matches[item.id] = {
          id: item.id,
          count: startCount,
        }
        if (Array.isArray(item.items)) {
          item.items.forEach(
            (subItem) =>
              (matches[item.id].count += this.getSubstringCount(
                this.filterValue,
                subItem.name
              ))
          )
        }
        if (matches[item.id].count === 0) {
          delete matches[item.id]
        } else {
          notSelectedItems[item.id] = item
        }
      })

      return Object.values(matches)
        .sort((a, b) => b.count - a.count)
        .map((v) => notSelectedItems[v.id])
    },
  },

  methods: {
    setFilter(value) {
      this.filterValue = value
    },

    addElement(eventData) {
      this.$store.commit('addElement', eventData.elementId)
    },

    deleteElement(eventData) {
      this.$store.commit('deleteElement', eventData.elementId)
    },

    getSubstringCount(substring, str) {
      return Array.from(str.matchAll(substring)).length
    },
  },
}
</script>

<template>
  <div class="main">
    <h2>Главная</h2>
    <div class="main__filter-container">
      <elements-filter @change-value="setFilter"></elements-filter>
    </div>
    <div class="main__panels-container">
      <div class="main__panel">
        <elements-list
          :elements="filteredItems"
          :buttons="['+']"
          @button-click="addElement"
        ></elements-list>
      </div>
      <div class="main__panel">
        <elements-list
          :elements="selectedItems"
          :buttons="['-']"
          @button-click="deleteElement"
        ></elements-list>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: block;
}

.main__panels-container {
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
}

.main__filter-container {
  margin: 5px;
  border: 1px solid var(--color-border);
}

.main__panel {
  flex: 1 1;
  margin: 5px;
  border: 1px solid var(--color-border);
  min-width: 400px;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
