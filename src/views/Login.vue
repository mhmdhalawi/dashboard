<template>
  <h1>Login Form</h1>
  <button @click="submitToken">Submit</button>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const token = computed(() => store.state.token);

    function submitToken() {
      store.commit('setToken');
      localStorage.setItem('token', token.value);
      router.push({ name: 'Home' });
    }

    return { submitToken };
  },
};
</script>

<style></style>
