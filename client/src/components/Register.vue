<template>
  <div>
    <div class="jumbotron">
      <h1>REGISTER</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="exampleInputGroup1"
                      label="Username:"
                      label-for="exampleInput1"
                      description="login here bro">
          <b-form-input id="exampleInput1"
                        type="email"
                        v-model="email"
                        required
                        placeholder="Enter Username">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Password:"
                      label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="password"
                        v-model="password"
                        required
                        placeholder="Enter Password">
          </b-form-input>
        </b-form-group>
        <b-button @click="register" type="submit" variant="primary">Submit</b-button>
        <b-button @click="toLogin" variant="primary">Login</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
  </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      url: 'http://localhost:3000',
      show: true
    }
  },
  methods: {
    register () {
      let data = {
        email: this.email,
        password: this.password
      }
      console.log(data)
      axios.post(`${this.url}/users`, data)
        .then(response => {
          // console.log(response.data)
          swal(
            'Register Success',
            'you can login using your username now',
            'success'
          )
        })
        .catch(err => {
          swal({
            type: 'error',
            title: 'Register Failed',
            text: err.message
          })
        })
    },
    toLogin () {
      this.$router.push('/')
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.email))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>
