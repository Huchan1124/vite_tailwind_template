<script >

export default {
  data() {
    return {
      hamburgerMenuStatus: false,
    };
  },
  methods: {
    toggleHamburgerMenu(e) {
      this.hamburgerMenuStatus = !this.hamburgerMenuStatus;
    },
  },
  mounted() {},
};
</script>

<template>
  <header class="fixed w-full h-10">
    <nav class="bg-slate-200 flex items-center justify-between p-4">
      <img style="width:40px;" src="./assets/logo.svg" alt />

      <ul class="hidden md:flex justify-end text-center">
        <router-link to="/about" class="w-20 h-10 leading-10">
          About
        </router-link>
        <li class="w-20 h-10 leading-10">Docs</li>
        <li class="w-20 h-10 leading-10">Examples</li>
        <li class="w-20 h-10 leading-10">Blog</li>
        <li class="w-20 h-10 leading-10">Contact</li>
      </ul>
      <div @click="toggleHamburgerMenu" class="md:hidden w-10 h-10 outline outline-pink-500">Menu</div>
    </nav>
    <Transition>
      <ul v-if="hamburgerMenuStatus" class="md:hidden bg-slate-100 text-center">
        <li class="h-10 leading-10">About</li>
        <li class="h-10 leading-10">Docs</li>
        <li class="h-10 leading-10">Examples</li>
        <li class="h-10 leading-10">Blog</li>
        <li class="h-10 leading-10">Contact</li>
      </ul>
    </Transition>
  </header>

  <RouterView />
</template>

<style>
/* @import '@/assets/base.css'; */

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
