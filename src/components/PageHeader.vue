<script>
export default {
  name: 'PageHeader',
}
</script>

<template>
  <header>
    <router-link to="/" class="header__link">Главная</router-link>
    <router-link to="/history" class="header__link">История</router-link>

    <router-link to="/history/add" class="header__link">История добавлений</router-link>
    <router-link to="/history/delete" class="header__link">История удалений</router-link>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 0 0 4px;
  border: solid var(--color-border);
  border-width: 0 0 1px 0;
  margin-bottom: 20px;
}

.header__link {
  transition: 0.4s;
  text-decoration: none;
  padding: 0 0 5px;
  margin: 0 15px 15px 0;
  color: var(--color-heading-link);
}
.header__link:hover {
  background-color: var(--color-heading-link-background);
}

.header__link.router-link-exact-active {
  border: solid var(--color-heading-link-underline);
  border-width: 0 0 3px 0;
}
</style>
