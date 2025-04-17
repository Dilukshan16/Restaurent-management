<template>
  <div class="container">
    <div class="card">
      <img class="logo" alt="logo" src="../assets/resto.png" />
      <h1>SignUp</h1>
      <form class="form">
        <div class="input">
          <label for="name">Name</label>
          <input type="text" v-model="name" placeholder="Enter your name" />
        </div>

        <div class="input">
          <label for="email">Email</label>
          <input type="email" v-model="email" placeholder="Enter your email" />
        </div>

        <div class="input">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter your password"
          />
        </div>

        <button v-on:click="signUp" type="submit" class="btn">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      console.warn(result);
      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

/* Card-style form container */
.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logo {
  width: 200px;
  height: 200px;
}
.input {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.input label {
  font-weight: bold;
  margin-bottom: 5px;
}

.input input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

/* Button */
.btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
