<template>
  <div id="backgroud">
    <div id="create-account-box" class="shadow">
      <div class="title font-impact text-center">Create Account</div>
      <div style="padding: 50px">
        <div class="create-account-form">
          <label>Name</label>
          <input v-model="fullname" class="input-custom" type="text" />
          <label>Email</label>
          <input v-model="email" class="input-custom" type="text" />
          <label>Password</label>
          <input v-model="password" class="input-custom" type="password" />
        </div>

        <div style="margin-top: 40px">
          <button
            type="button"
            @click="create_account"
            class="btn btn-create-account btn-lg btn-block"
            style="width: 100%"
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
    };
  },
  methods:{
    create_account(){
      alert(`Fullname ${this.fullname} , Email ${this.email} , Password ${this.password}`)
    }
  }
};
</script>

<style>
#backgroud {
  background-color: #43435e;
  height: inherit;
  position: relative;
}

#create-account-box {
  min-width: 30vw;
  min-height: 50vh;
  background-color: #43435e;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50px;
  padding: 50px;
}
.shadow {
  box-shadow: 10px 4px 37px 0px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 10px 4px 37px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 10px 4px 37px 0px rgba(0, 0, 0, 0.71);
  color: white;
}

.title {
  font-size: 4em;
}

.text-center {
  text-align: center;
}

.input-custom {
  /* position: relative; */
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-bottom: 2px solid white;
  background: rgba(255, 255, 255, 0);
  color: white;
}

.btn-create-account {
  background-color: #7742a0;
  color: white;
}

</style>