<template>
  <transition name="page" mode="out-in">
    <NuxtPage />
  </transition>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  filter: grayscale(1);
}
</style>