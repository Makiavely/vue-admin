<template>
  <form className="form-signin" @submit.prevent="submit">
    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

    <label htmlFor="inputEmail" className="sr-only">Email address</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus
           v-model="email">

    <label htmlFor="inputPassword" className="sr-only">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
           v-model="password">

    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  </form>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
  name: "Login",
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const submit = async () => {
      await axios.post('login', {
        email: email.value,
        password: password.value,
        scope: 'admin'
      });
      await router.push('/');
    }
    return {
      email,
      password,
      submit
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>