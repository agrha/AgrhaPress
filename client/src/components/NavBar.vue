<template>
  <nav class="navbar navbar-light bg-dark fixed-top">
  <a @click="homepage" class="navbar-brand" id="navbartitle"><strong>LIVE CODE BRO</strong></a>
    <CreateArticle style="margin-right:10px"></CreateArticle>
    <button class="btn btn-danger" @click="logout"><strong>Logout</strong></button>
</nav>
</template>

<script>
import {mapGetters} from 'vuex'
import CreateArticle from '@/components/CreateArticle'
export default {
  data () {
    return {
      role: localStorage.getItem('role')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    homepage () {
      this.$router.push('/home')
    }
  },
  components: {
    CreateArticle
  },
  computed: {
    ...mapGetters([
      'loadingEdit'
    ])
  }
}
</script>

<style scoped>
#navbartitle {
  color:white;
  text-shadow: 3px 2px red;
  text-decoration: underline;
}
</style>
