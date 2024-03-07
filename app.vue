<script setup>
</script>
<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>

<style>
div#site-content.navigate {
    animation-name: navigateAnimation;
    animation-duration: 1.5s;
    animation-timing-function: linear;
}
@keyframes navigateAnimation {
    0% {
        opacity: 1;
    }
    20% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
