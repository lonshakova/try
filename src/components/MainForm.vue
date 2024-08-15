<template>
  <form class="main-form">
    <v-text-field clearable label="Name" variant="solo-filled" class="input" v-model="name" />
    <v-text-field clearable label="LastName" variant="solo-filled" class="input" v-model="name" />
    <v-text-field clearable label="Number" variant="solo-filled" class="input" v-model="name" />
    <div class="btns">
      <v-btn class="btn" color="#17a589" @click="submitForm()">submit</v-btn>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      name:'',
      lastName:'',
      number:''
    }
  },
}
</script>

<style>
.main-form{
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.input{
  width: 500px;
}

.btns{
  width: 500px;
  display: flex;
  justify-content: right;
}


</style>
