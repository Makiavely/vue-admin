<template>
  <!-- <form class="form-signin" @submit="submit"> -->
  <form class="form-signin" @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <label for="first_name" class="sr-only">First Name</label>
    <input type="text" id="first_name" class="form-control" placeholder="First Name" required v-model="firstName">

    <label for="last_name" class="sr-only">Last Name</label>
    <input type="text" id="last_name" class="form-control" placeholder="Last Name" required v-model="lastName">

    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="text" id="inputEmail" class="form-control" placeholder="Email address" required v-model="email">

    <label for="inputPassword" class="sr-only">Password</label>
    <input type="text" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">

    <label for="passwordConfirm" class="sr-only">Password Confirm</label>
    <input type="text" id="passwordConfirm" class="form-control" placeholder="Password Confirm" required
           v-model="passwordConfirm">

    <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
  </form>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
  name: "Register",
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    const router = useRouter();

    /*     const submit = () => {
           axios.post('http://localhost:8000/api/register',{
             first_name: firstName.value,
             last_name: lastName.value,
             email: email.value,
             password: password.value,
             password_confirm: passwordConfirm.value,
           }).then(
             res => {
               console.log(res)
             }
           )
         }*/


    const submit = async () => {
      /*const response = await axios.post('http://localhost:8000/api/register',{*/
      await axios.post('http://localhost:8000/api/register', {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        password_confirm: passwordConfirm.value,
      });

      /* console.log(response);*/
      await router.push('/login');
    }

    return {
      firstName: firstName,
      lastName,
      email,
      password,
      passwordConfirm,
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
  display: flex;
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

.form-signin .form-floating:focus-within {
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
