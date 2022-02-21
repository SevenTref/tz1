<script>
export default {
  name: 'ElementsList',
  props: {
    elements: {
      type: Array,
      required: false,
      default: () => [],
    },

    buttons: {
      type: Array,
      required: false,
      default: '',
    },
  },

  methods: {
    buttonClick(elementId, button) {
      this.$emit('button-click', { elementId, button })
    },
  },
}
</script>

<template>
  <div class="elements-list">
    <div class="elements__element" v-for="elm in elements" :key="elm.id">
      <div class="elements__element-name">{{ elm.name }}</div>
      <ul class="elements__buttons-container">
        <li
          class="elements__button"
          v-for="(button, i) in buttons"
          :key="i"
          @click="buttonClick(elm.id, button)"
        >
          {{ button }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.elements-list {
  display: block;
}

.elements__element {
  margin: 2px 2px 2px 5px;
}

.elements__element-name {
  display: inline-block;
  max-width: 85%;
  overflow: hidden;
  white-space: nowrap;
}

.elements__buttons-container {
  float: left;
  margin: 0 5px;
  padding: 0;
}

.elements__button {
  text-decoration: none;
  display: inline-block;
  padding: 0 3px;
  margin: 0 3px;
  line-height: 16px;
  outline: 1px solid var(--color-border);
  cursor: pointer;
  min-width: 14px;
  text-align: center;
}
</style>
