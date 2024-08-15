<template>
  <form class="main-form">
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
      :counter="7"
      v-model="user.number" />
    <div class="btns">
      <v-btn
        class="btn"
        color="#17a589"
        @click="submitForm()"
        >submit</v-btn
      >
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: "",
          lastName: "",
          number: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert(JSON.stringify(this.user));
      },
    },
  };
</script>

<style>
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
</style>
