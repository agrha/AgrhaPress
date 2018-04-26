<template>
  <div class="jumbotron">
    <h1>LOGIN</h1>
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
      <b-button @click="login" type="submit" variant="primary">Submit</b-button>
      <b-button @click="toRegister" variant="primary">Register</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
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
    login () {
      let data = {
        email: this.email,
        password: this.password
      }
      axios.post(`${this.url}/users/signin`, data)
        .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('id', response.data.id)
          swal(
            'Login Success',
            'you can go to landing page now',
            'success'
          )
          this.$router.push('/home')
        })
        .catch(err => {
          swal({
            type: 'error',
            title: 'Login Failed',
            text: err.message
          })
        })
    },
    toRegister () {
      this.$router.push('/register')
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
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

<style scoped>
#body{
background-color: palevioletred
}
.login{
padding: 40px;
margin-top: 50px;
border: 5px solid rgba(0, 0, 0, 0.44);
border-radius: 5px;
background: rgba(0, 0, 0, 0.4);
}
.loginstyle{
height: 54px;
padding: 11px 12px;
font-size: 16px;
-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
-webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
-o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
width: 100%;
}
.register{
position: relative;
width: 300px;
right: 30px;
}
.registerstyle{
height: 54px;
padding: 11px 12px;
font-size: 16px;
-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
-webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
-o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
width: 100%;
}
.inputRegister{
width: 180px;
}
::-webkit-input-placeholder {
color: black;
}
:-moz-placeholder { /* Firefox 18- */
color: black;
}
::-moz-placeholder {  /* Firefox 19+ */
color: black;
}
:-ms-input-placeholder {
color: black;
}
h1 {
    margin:0;
    padding:0;
    position: relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
h1 span {
    color:#17a2b8;
    background:#fff;
    padding:10px 20px;
    font-family:arial;
    display:table-cell;
    box-shadow:inset 0 0 5px rgba(0,0,0,.3) , 0 5px 0 #ccc;
    animation: animate .5s infinite;
}
@keyframes animate
{
    0%
    {
     transform: translateY(0px);
    }
    50%
    {
     transform: translateY(-20px);
    }
    100%
    {
     transform: translateY(0px);
    }
}
h1 span:nth-child(1)
{
    animation-delay:.2s;
}
h1 span:nth-child(2)
{
    animation-delay:.4s;
}
h1 span:nth-child(3)
{
    animation-delay:.6s;
}
h1 span:nth-child(4)
{
    animation-delay:.8s;
}
h1 span:nth-child(5)
{
    animation-delay:.10s;
}
h1 span:nth-child(6)
{
    animation-delay:.2s;
}
h1 span:nth-child(7)
{
    animation-delay:.4s;
}
</style>
