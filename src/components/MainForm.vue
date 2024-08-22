<template>
  <div class="header">
    <v-btn
      @click="isForm = !isForm"
      class="btn"
      >Form</v-btn
    >
    <v-btn
      @click="isUsers = !isUsers"
      class="btn"
      >Users</v-btn
    >
  </div>
  <form
    class="main-form"
    v-if="isForm">
    <v-text-field
      clearable
      label="Name"
      variant="solo-filled"
      class="input"
      v-model="user.name" />
    <v-text-field
      clearable
      label="LastName"
      variant="solo-filled"
      class="input"
      v-model="user.lastName" />
    <v-text-field
      clearable
      label="Number"
      variant="solo-filled"
      class="input"
      v-model="user.number" />
    <div class="btns">
      <v-btn
        color="#17a589"
        @click="submitForm()"
        >submit</v-btn
      >
    </div>
  </form>
  <div
    class="data-users"
    v-for="user in users"
    v-if="isUsers">
    <div class="user">
      <div>Name: {{ user.name }}</div>
      <div>LastName: {{ user.lastName }}</div>
      <div>Number: {{ user.number }}</div>
      <div class="user-buton">
        <v-btn
          color="#663399"
          @click="deleteUser(user)"
          >delete</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isForm: true,
        isUsers: true,
        user: {
          id: "",
          name: "",
          lastName: "",
          number: "",
        },
        users: [],
      };
    },
    methods: {
      submitForm() {
        this.user.id = Date.now();
        this.users.push(this.user);
        this.user = {
          id: "",
          name: "",
          lastName: "",
          number: "",
        };
      },
      deleteUser(user) {
        this.users = this.users.filter((p) => p.id !== user.id);
      },
    },
  };
</script>

<style>
  .header {
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    margin: 0px 70px;
  }

  .main-form {
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .input {
    width: 500px;
  }

  .btns {
    width: 500px;
    display: flex;
    justify-content: right;
  }

  .data-users {
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .user {
    padding: 10px;
    width: 500px;
    font-size: 25px;
    border: 10px #663399 double;
    border-radius: 20px;
  }

  .user-buton{
    display: flex;
    justify-content: end;
  }
</style>
