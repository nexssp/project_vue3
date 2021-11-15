<template>
  <div id="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label>Username: <input id="username" type="text" /></label>
      <label>Email:<input id="email" type="text" /></label>
      <label>Password:<input id="password" type="password" /></label>
      <button>Register</button>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    register() {
      alert("works!");
    },
  },
};
</script>
