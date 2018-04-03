<template>
  <div class="app">
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }
</style>
