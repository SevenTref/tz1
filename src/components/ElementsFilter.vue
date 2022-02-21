<script>
export default {
  name: 'ElementsFilter',

  data() {
    return {
      filterValue: '',
      timer: null,
    }
  },

  watch: {
    filterValue(newValue) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(this.emitValue, 600)
    },
  },

  methods: {
    emitValue() {
      this.$emit('change-value', this.filterValue)
    },
  },
}
</script>

<template>
  <div class="filter">
    <span class="filter__field-label">Фильтр:</span>
    <input type="text" class="filter__field" name="filter" v-model="filterValue" />
  </div>
</template>

<style scoped>
.filter {
  width: 100%;
  padding: 10px 5px;
}

.filter__field {
  margin: 0 5px;
  padding: 2px 5px;
  border: 1px solid var(--color-border);
  line-height: 24px;
  outline: none;
}

.filter__field:focus {
  border: 1px solid var(--color-border-hover);
}
</style>
